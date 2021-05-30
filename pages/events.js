import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Events() {
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
        <h1 className={styles.title}>Events</h1>

        <p className={styles.description}>A new vision for education</p>

        <div>
          <>
            <h2>Events</h2>
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
