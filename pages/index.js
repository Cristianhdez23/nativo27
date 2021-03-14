import Head from "next/head";
import DividerSection from "../components/c_004-DividerSection/DividerSection";
// --||----||----|| JSON DATA ||----||----||-- //
import { DIVIDER_DATA_HOMEPAGE } from "../jsonData/homepage/4-DividerSectionData";
// --||----||----|| JSON DATA ||----||----||-- //
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Nativo 27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Nativo 27</a>
        </h1>
      </main>
      <DividerSection color="tertiary" data={DIVIDER_DATA_HOMEPAGE} />
    </main>
  );
};

export default HomePage;
