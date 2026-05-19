import SectionHeader from '@/components/SectionHeader';
import SkillBar from '@/components/SkillBar';
import { skills, experiences } from '@/lib/data';
import styles from './About.module.css';

export default function About() {
  const categories: Array<'Frontend' | 'Backend' | 'Tools'> = ['Frontend', 'Backend', 'Tools'];

  return (
    <>
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="About me"
            title="A bit about who I am and what I do"
            subtitle="I'm a designer-developer based in Lisbon. I love turning complex problems into simple, beautiful interfaces."
          />

          <div className={styles.aboutGrid}>
            <div className={styles.bio}>
              <p>
                For the past seven years I've worked with startups and agencies across Europe, building everything from
                marketing sites to large-scale SaaS dashboards. I care deeply about the details — typography, motion,
                accessibility — and the craft of making products that feel effortless.
              </p>
              <p>
                When I'm not at the keyboard you'll find me hiking, taking film photographs or experimenting with
                generative art.
              </p>
              <div className={styles.facts}>
                <div className={styles.fact}><span>Location</span><strong>Lisbon, Portugal</strong></div>
                <div className={styles.fact}><span>Experience</span><strong>7+ years</strong></div>
                <div className={styles.fact}><span>Languages</span><strong>EN · PT · ES</strong></div>
                <div className={styles.fact}><span>Availability</span><strong>Open to work</strong></div>
              </div>
            </div>

            <div className={styles.avatar}>
              <div className={styles.avatarInner}>AC</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Skills" title="Tools I work with daily" />
          <div className={styles.skillsGrid}>
            {categories.map((cat) => (
              <div key={cat} className={styles.skillCol}>
                <h3 className={styles.skillTitle}>{cat}</h3>
                <div className={styles.skillList}>
                  {skills.filter((s) => s.category === cat).map((s) => (
                    <SkillBar key={s.name} skill={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Experience" title="Where I've worked" />
          <ol className={styles.timeline}>
            {experiences.map((exp, idx) => (
              <li key={idx} className={styles.tItem}>
                <div className={styles.tDot} />
                <div className={styles.tCard}>
                  <div className={styles.tHead}>
                    <h3 className={styles.tRole}>{exp.role}</h3>
                    <span className={styles.tPeriod}>{exp.period}</span>
                  </div>
                  <p className={styles.tCompany}>{exp.company}</p>
                  <p className={styles.tDesc}>{exp.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
