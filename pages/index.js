import Head from "next/head";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Nativo 27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.imageContainer}>
        <img className={styles.bgImg} src="/photos/2020_Blizzconline_Zoom_background_OW02.jpeg?lqip" />   {/* <-- SVG trace */}
      </section>
    </main>
  );
};

export default HomePage;
