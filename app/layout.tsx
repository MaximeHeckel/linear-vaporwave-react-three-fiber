import '@/styles/dist.css';
import React from 'react';
import styles from '../styles/Home.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
      </head>
      <body className="overflow-y-scroll bg-zinc-900">
      <div data-theme="synthwave" className={styles.container}>
          <div className="navbar bg-base-100">
              <div className="flex-1">
                  <a className="btn btn-ghost normal-case text-xl">Vaporwave Aesthetic React-Three/Fiber Demo</a>
              </div>
          </div>
          <main className={styles.main}>
              {children}
          </main>
          <footer className={styles.footer}>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
              Powered by{' '}
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
