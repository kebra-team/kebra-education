import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Products() {
  return (
    <div>
      <Head>
        <title>Kebra Education</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button>
          <Link href="/">back</Link>
        </button>
        <h1 className={styles.title}>Products</h1>

        <p className={styles.description}>A new vision for education</p>

        <div>
          <>
            <h2>Bitay</h2>
            <p>Our best in market data collection and analysis uses AI to identify trends and address users concerns in real-time.</p>
          </>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
