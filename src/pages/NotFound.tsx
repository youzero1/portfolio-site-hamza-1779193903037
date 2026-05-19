import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.sub}>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className={styles.btn}>
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>
    </section>
  );
}
