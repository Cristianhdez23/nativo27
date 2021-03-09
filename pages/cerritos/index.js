import Head from "next/head";
import ImageBanner from "../../components/c_002-ImageBanner/ImageBanner";
import CarouselSection from "../../components/c_003-CarouselSection/CarouselSection";
import DividerSection from "../../components/c_004-DividerSection/DividerSection";
import styles from "../../styles/Home.module.css";

const Cerritos = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Cerritos - Nativo 27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Cerritos</a>
        </h1>
      </main>
    </main>
  );
};

export default Cerritos;
