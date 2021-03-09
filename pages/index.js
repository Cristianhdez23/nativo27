import Head from "next/head";
import Image from "material-ui-image";
import DividerSection from '../components/c_004-DividerSection/DividerSection';
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
      <DividerSection srcImage="/photos/2020_Blizzconline_Zoom_background_WOW_01.jpeg"/>
    </main>
  );
};

export default HomePage;
