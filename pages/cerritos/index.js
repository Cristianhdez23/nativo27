import Head from "next/head";
import Image from "material-ui-image";
import styles from "../../styles/Home.module.css";

const Cerritos = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Cerritos - Nativo 27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.imageContainer}>
        <Image
          src="/photos/2020_Blizzconline_Zoom_background_WOW_01.jpeg"
          animationDuration={1000}
          disableSpinner
          cover
          style={{paddingTop: '0', height: '100%', width: '100%'}}
        />
      </section>
    </main>
  );
};

export default Cerritos;
