import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Join Kebra Education</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://kebra-ed.vercel.app">Join Kebra Education</a>
        </h1>

        <p className={styles.description}>A new vision for education</p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>Essays</h3>
            <p>Read our in-depth ideas about how to reshape education</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Fund</h3>
            <p>
              Let us know if you would like to help fund this vision into
              reality
            </p>
          </a>

          <a href="" className={styles.card}>
            <h3>Contribute</h3>
            <p>
              Share your ideas with us and we will share them with our community
            </p>
          </a>

          <a href="" className={styles.card}>
            <h3>Join</h3>
            <p>Submit your resume to join our team</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Help fund our vision</p>
        <p>Bitcoin address:</p>
        <p>Ethereum address:</p>

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