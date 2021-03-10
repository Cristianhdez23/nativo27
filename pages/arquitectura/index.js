import Head from "next/head";
import ImageBanner from "../../components/c_002-ImageBanner/ImageBanner";
import styles from "../../styles/Home.module.css";

const Arquitectura = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arquitectura - Nativo 27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImageBanner srcImage="/photos/bg-arquitectura.jpg"/>
    </div>
  );
};

export default Arquitectura;
