import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kebra Education</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Kebra Education</h1>

        <p className={styles.description}>A new vision for education</p>

        <div className={styles.grid}>
          <a href="/essays" className={styles.card}>
            <h3>Essays</h3>
            <p>Read our in-depth ideas about how to reshape education</p>
          </a>

          <a href="contribute" className={styles.card}>
            <h3>Contribute</h3>
            <p>
              Click <a href="contribute-google-form">here</a>here to share your
              ideas with us and we will share them with our community
            </p>
          </a>

          <a href="join" className={styles.card}>
            <h3>Join</h3>
            <p>
              Click <a href="join-google-form">here</a> to submit your resume to
              join our team
            </p>
          </a>
          <a href="fund" className={styles.card}>
            <h3>Fund our vision</h3>
            <p>Bitcoin address: 34DS1hPiUzRh2D9UxqFWpF93Z2pVbivf7v</p>
            <br />
            <p>Ethereum address: 0xb3f2d3e818e5c68b59f2c9f3c79786c0339969e7</p>
          </a>
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
