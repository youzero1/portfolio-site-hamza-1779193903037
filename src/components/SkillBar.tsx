import type { Skill } from '@/types';
import styles from './SkillBar.module.css';

type SkillBarProps = { skill: Skill };

export default function SkillBar({ skill }: SkillBarProps) {
  return (
    <div className={styles.row}>
      <div className={styles.head}>
        <span className={styles.name}>{skill.name}</span>
        <span className={styles.level}>{skill.level}%</span>
      </div>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${skill.level}%` }} />
      </div>
    </div>
  );
}
