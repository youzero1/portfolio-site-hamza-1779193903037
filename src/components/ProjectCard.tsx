import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/types';
import styles from './ProjectCard.module.css';

type ProjectCardProps = { project: Project };

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cover} style={{ background: project.accent }}>
        <span className={styles.coverLabel}>{project.title.slice(0, 1)}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((t: string) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
        <div className={styles.actions}>
          {project.url && (
            <a href={project.url} className={styles.actionPrimary} target="_blank" rel="noreferrer">
              <ExternalLink size={14} /> Live
            </a>
          )}
          {project.repo && (
            <a href={project.repo} className={styles.actionGhost} target="_blank" rel="noreferrer">
              <Github size={14} /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
