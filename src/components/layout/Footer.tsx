import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <p className={styles.copy}>© {year} Alex Carter. Crafted with care.</p>
          <div className={styles.social}>
            <a href="#" aria-label="GitHub" className={styles.iconLink}><Github size={18} /></a>
            <a href="#" aria-label="LinkedIn" className={styles.iconLink}><Linkedin size={18} /></a>
            <a href="#" aria-label="Twitter" className={styles.iconLink}><Twitter size={18} /></a>
            <a href="mailto:hello@alexcarter.dev" aria-label="Email" className={styles.iconLink}><Mail size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
