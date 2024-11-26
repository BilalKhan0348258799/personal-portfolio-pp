// src/app/contact/page.tsx

import styles from '../../styles/Home.module.css';


export default function Contact() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h2 className={styles.title}>Contact Me</h2>
        <p className={styles.subtitle}>Feel free to reach out for any inquiries or collaborations!</p>
      </section>

      <section className={styles.aboutMe}>
        <h2>Get in Touch</h2>
        <p>Email: <a href="mailto:muhammadbilalfareed94@gmail.com">muhammadbilalfareed94@gmail.com</a></p>
        <p>Phone: 0000-1111-2222</p>
      </section>
    </div>
  );
}

