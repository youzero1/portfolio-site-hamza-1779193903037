import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import styles from './Contact.module.css';

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev: FormState) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    const emailOk = /.+@.+\..+/.test(form.email);
    if (!emailOk) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Let's work together"
          subtitle="Tell me about your project, idea or role — I usually reply within a day."
        />

        <div className={styles.grid}>
          <aside className={styles.side}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><Mail size={18} /></div>
              <div>
                <p className={styles.infoLabel}>Email</p>
                <a href="mailto:hello@alexcarter.dev" className={styles.infoValue}>hello@alexcarter.dev</a>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><Phone size={18} /></div>
              <div>
                <p className={styles.infoLabel}>Phone</p>
                <a href="tel:+351900000000" className={styles.infoValue}>+351 900 000 000</a>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><MapPin size={18} /></div>
              <div>
                <p className={styles.infoLabel}>Location</p>
                <p className={styles.infoValue}>Lisbon, Portugal</p>
              </div>
            </div>
          </aside>

          <form className={styles.form} onSubmit={onSubmit} noValidate>
            {submitted && (
              <div className={styles.success}>
                <CheckCircle2 size={18} />
                <span>Thanks! Your message has been received.</span>
              </div>
            )}

            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" value={form.name} onChange={onChange} placeholder="Jane Doe" />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="jane@company.com" />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} value={form.message} onChange={onChange} placeholder="Tell me about your project..." />
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button type="submit" className={styles.submit}>
              Send message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
