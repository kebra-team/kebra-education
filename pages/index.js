import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kebra Ed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Kebra Ed</h1>

        <p className={styles.description}>A new vision for education</p>

        <div className={styles.grid}>
          <div>
            <Link href="/essays">
              <h3>Essays</h3>
            </Link>
            <p>Read our in-depth ideas about how to reshape education</p>
          </div>
          <div>
            <Link href="/essays">
              <h3>Fund our vision</h3>
            </Link>

            <p>Bitcoin address: 34DS1hPiUzRh2D9UxqFWpF93Z2pVbivf7v</p>
            <p>Ethereum address: 0xb3f2d3e818e5c68b59f2c9f3c79786c0339969e7</p>
          </div>
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
