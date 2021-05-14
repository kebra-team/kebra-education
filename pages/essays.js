import useSWR from "swr";
import styles from "../styles/Home.module.css";

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
        <h1>Essays</h1>
        <div>
          {data.map((essay) => (
            <a href="contribute" className={styles.card}>
              <h3>{essay.title}</h3>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Essays;
