import useSWR from "swr";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());
const Essays = () => {
  const { data, error } = useSWR("/api/essays", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
      <Head>
        <title>Kebra Education</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <button>
          <Link href="/">back</Link>
        </button>
        <h1>Essays</h1>
        <p>
          A series of short essays on the history and future of school.
          system
        </p>
        <div>
          {data.map((essay, index) => (
            <>
            <Link
              key={index}
              href={`/essays/essay?title=${essay.title}&text=${essay.text}`}
            >
              <h3>{essay.title}</h3>
            </Link>
            --------
            </>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Essays;
