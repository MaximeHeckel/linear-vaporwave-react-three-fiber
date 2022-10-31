import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Layout = ({ children } : { children: any }) => {
    const router = useRouter();

    function navigateHome() {
        router.push('/');
    }
    
    return (
        <div data-theme="synthwave" className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl" onClick={navigateHome}>Vaporwave Aesthetic React-Three/Fiber Demo</a>
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
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
                </a>
            </footer>
        </div>
    );
};

export default Layout