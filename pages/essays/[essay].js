import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

const Essay = () => {
  const router = useRouter();
  const { title, text } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Kebra Ed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <button>
            <Link href="/essays">back</Link>
          </button>
          <h1>{title}</h1>
          <div>
            <p>{text}</p>
          </div>
      </main>
    </div>
  );
};

export default Essay;
