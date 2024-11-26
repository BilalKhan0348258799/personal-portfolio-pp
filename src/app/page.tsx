// src/app/home/page.tsx
import React from 'react';
import styles from '../styles/Home.module.css';


const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Hello, I'm Muhammad Bilal</h1>
        <p className={styles.subtitle}>A passionate student in BSCS & AI enthusiast</p>
        <p className={styles.aboutMe}>
          I'm a student at a well-known university, currently pursuing my Bachelor's in Computer Science (BSCS). 
          I'm also enrolled in the Governor's initiative of Artificial Intelligence and Cloud Computing. 
          I am passionate about technology and innovation, and I aim to apply my skills in the tech industry to create impactful solutions.
        </p>
      </section>

      <section className={styles.aboutDetails}>
        <h2 className={styles.subTitle}>About Me</h2>
        <p className={styles.aboutParagraph}>
          I have always been fascinated by technology and its potential to transform the world. As a student of 
          Computer Science, I’ve gained a strong foundation in software development, problem-solving, and data analysis. 
          Over the years, I have developed a keen interest in Artificial Intelligence and Cloud Computing, which are 
          reshaping industries globally. I aim to make a meaningful contribution to these fields through my knowledge 
          and skills.
        </p>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Skills</h3>
          <ul className={styles.skillsList}>
            <li>Web Development (HTML, CSS, JavaScript, React.js)</li>
            <li>Backend Development (Node.js, Express)</li>
            <li>Cloud Computing (AWS, Google Cloud Platform)</li>
            <li>Machine Learning (Python, TensorFlow, scikit-learn)</li>
            <li>Database Management (MongoDB, SQL)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Education</h3>
          <p>
            <strong>Bachelor of Science in Computer Science (BSCS)</strong> <br />
            Well-Known University | 2020 - Present <br />
            Key Focus Areas: Software Engineering, Machine Learning, Cloud Computing
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Career Goals</h3>
          <p>
            My goal is to work in a challenging and dynamic environment where I can contribute to solving real-world 
            problems using technology. I am particularly interested in roles related to software engineering, AI development, 
            and cloud computing. I aspire to work with a company that values innovation and collaboration, and I aim to 
            make a lasting impact through my work.
          </p>
        </div>
      </section>

      <section className={styles.projects}>
        <h3 className={styles.projectsTitle}>My Projects</h3>
        <ul className={styles.projectsList}>
          <li className={styles.projectItem}>
            <a href="https://rent-a-car-amber.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              Rent-a-Car Project
            </a>
          </li>
          <li className={styles.projectItem}>
            <a href="https://clothing-website-tawny.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              Clothing Website Project
            </a>
          </li>
          <li className={styles.projectItem}>
            <a href="https://resume-builder-1-two.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              Resume Builder Project
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;






