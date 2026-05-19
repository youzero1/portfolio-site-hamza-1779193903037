import { useMemo, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';
import { projects } from '@/lib/data';
import clsx from 'clsx';
import styles from './Projects.module.css';

export default function Projects() {
  const allTags = useMemo<string[]>(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t: string) => set.add(t)));
    return ['All', ...Array.from(set)];
  }, []);

  const [active, setActive] = useState<string>('All');

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title="All projects"
          subtitle="A selection of recent client work, side projects and experiments."
        />

        <div className={styles.filters} role="tablist">
          {allTags.map((tag: string) => (
            <button
              key={tag}
              role="tab"
              aria-selected={active === tag}
              className={clsx(styles.chip, active === tag && styles.chipActive)}
              onClick={() => setActive(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No projects match this filter.</p>
        )}
      </div>
    </section>
  );
}
