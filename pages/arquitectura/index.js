import Head from "next/head";
import ImageBanner from "../../components/c_002-ImageBanner/ImageBanner";
// --||----||----|| JSON DATA ||----||----||-- //
import { BANNER_DATA } from "./data/bannerData";
// --||----||----|| JSON DATA ||----||----||-- //
import styles from "../../styles/Home.module.css";

const Arquitectura = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Arquitectura - Nativo 27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImageBanner
        srcImage="/photos/arquitectura/bg-arquitectura.jpg"
        color="tertiary"
        data={BANNER_DATA}
      />
    </main>
  );
};

export default Arquitectura;
