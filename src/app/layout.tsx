// src/app/layout.tsx

import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import styles from '../styles/Home.module.css';
  // Import the CSS module

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Muhammad Bilal Portfolio',
  description: 'A personal portfolio showcasing projects and skills.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <h1 className={styles.title}>Muhammad Bilal</h1>
          <nav>
            <a href="/" className={styles.navLink}>Home</a>
            <a href="/about" className={styles.navLink}>About</a>
            <a href="/contact" className={styles.navLink}>Contact</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer className={styles.footer}>
          <p>© 2024 Muhammad Bilal. All rights reserved.</p>
          <p>Connect with me: <a href="mailto:muhammadbilalfareed94@gmail.com">Email</a></p>
        </footer>
      </body>
    </html>
  );
}



