import styles from './SectionHeader.module.css';

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({ eyebrow, title, subtitle, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={styles.wrap} data-align={align}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
