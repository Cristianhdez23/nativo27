import Head from "next/head";
import ImageBanner from "../../components/c_002-ImageBanner/ImageBanner";
// --||----||----|| JSON DATA ||----||----||-- //
import { BANNER_DATA } from "./bannerData";
// --||----||----|| JSON DATA ||----||----||-- //
import styles from "../../styles/Home.module.css";

const Cerritos = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Cerritos - Nativo 27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImageBanner
        srcImage="/photos/cerritos/bg-cerritos.jpg"
        color="primary"
        data={BANNER_DATA}
      />
    </main>
  );
};

export default Cerritos;
