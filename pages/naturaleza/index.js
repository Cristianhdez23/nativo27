import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Naturaleza = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Naturaleza - Nativo 27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Naturaleza</a>
        </h1>
      </main>
    </div>
  );
};

export default Naturaleza;
