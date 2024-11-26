// src/app/about/page.tsx

import styles from '../../styles/Home.module.css';


export default function About() {
  return (
    <div className={styles.container}>
      <section className={styles.aboutMe}>
        <h2>About Me</h2>
        <p>I am Muhammad Bilal, currently enrolled in the Bachelor's program in BSCS at a well-known university.</p>
        <p>I am also part of the Governor's initiative for Artificial Intelligence and Cloud Computing. I'm passionate about technology, and my journey has been focused on learning and applying cutting-edge technologies in real-world projects.</p>
      </section>

      <section className={styles.aboutDetails}>
        <h3 className={styles.subTitle}>My Career and Interests</h3>
        <p className={styles.aboutParagraph}>With a keen interest in Cloud Computing and AI, I am committed to building scalable and efficient systems that solve real-world problems.</p>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Skills</h4>
          <ul className={styles.skillsList}>
            <li>Cloud Computing</li>
            <li>Artificial Intelligence</li>
            <li>JavaScript & TypeScript</li>
            <li>React & Next.js</li>
            <li>Database Management</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

