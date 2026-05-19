import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import clsx from 'clsx';
import styles from './Header.module.css';

type NavItem = { to: string; label: string };

const NAV: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.inner)}>
        <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.brandIcon}><Sparkles size={18} /></span>
          <span className={styles.brandName}>Alex<span className={styles.brandDot}>.</span>Carter</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => clsx(styles.navLink, isActive && styles.active)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className={styles.cta}>Hire me</Link>

        <button
          className={styles.menuBtn}
          aria-label="Toggle menu"
          onClick={() => setOpen((v: boolean) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className={styles.mobile}>
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => clsx(styles.mobileLink, isActive && styles.active)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className={styles.mobileCta} onClick={() => setOpen(false)}>Hire me</Link>
        </div>
      )}
    </header>
  );
}
