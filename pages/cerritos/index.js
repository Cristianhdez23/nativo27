import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Cerritos = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Cerritos - Nativo 27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="/photos/2020_Blizzconline_Zoom_background_WOW_01.jpeg"
        alt="GG"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom center"
        quality={50}
      />
    </main>
  );
};

export default Cerritos;