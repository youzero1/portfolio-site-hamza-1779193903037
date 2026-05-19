import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Code2, Palette, Rocket } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';
import { projects } from '@/lib/data';
import styles from './Home.module.css';

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <span className={styles.badge}>
                <span className={styles.dot} /> Available for freelance
              </span>
              <h1 className={styles.title}>
                Designing & building<br />
                <span className={styles.gradient}>delightful digital products</span>
              </h1>
              <p className={styles.lead}>
                I'm Alex — a software engineer focused on interfaces, motion and performance.
                I help startups ship beautiful, fast products that people love to use.
              </p>
              <div className={styles.ctaRow}>
                <Link to="/projects" className={styles.primary}>
                  View my work <ArrowRight size={16} />
                </Link>
                <a href="#" className={styles.secondary}>
                  <Download size={16} /> Download CV
                </a>
              </div>
              <div className={styles.socials}>
                <a href="#" aria-label="GitHub"><Github size={18} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              </div>
            </div>

            <div className={styles.heroArt} aria-hidden="true">
              <div className={styles.orb} />
              <div className={styles.card1}>
                <div className={styles.cardIcon}><Code2 size={18} /></div>
                <div>
                  <p className={styles.cardTitle}>Clean code</p>
                  <p className={styles.cardSub}>Type-safe, tested, documented.</p>
                </div>
              </div>
              <div className={styles.card2}>
                <div className={styles.cardIcon}><Palette size={18} /></div>
                <div>
                  <p className={styles.cardTitle}>Beautiful UI</p>
                  <p className={styles.cardSub}>Pixel-perfect, accessible designs.</p>
                </div>
              </div>
              <div className={styles.card3}>
                <div className={styles.cardIcon}><Rocket size={18} /></div>
                <div>
                  <p className={styles.cardTitle}>Fast delivery</p>
                  <p className={styles.cardSub}>From idea to launch in weeks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statNum}>7+</span>
              <span className={styles.statLabel}>Years of experience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>40+</span>
              <span className={styles.statLabel}>Projects shipped</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>20+</span>
              <span className={styles.statLabel}>Happy clients</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>12</span>
              <span className={styles.statLabel}>Open-source repos</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.featuredHead}>
            <SectionHeader
              eyebrow="Selected work"
              title="Featured projects"
              subtitle="A few things I've designed and built recently."
            />
            <Link to="/projects" className={styles.viewAll}>
              All projects <ArrowRight size={14} />
            </Link>
          </div>
          <div className={styles.grid}>
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.cta}>
            <div>
              <h3 className={styles.ctaTitle}>Have a project in mind?</h3>
              <p className={styles.ctaSub}>Let's build something great together.</p>
            </div>
            <Link to="/contact" className={styles.primary}>
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
