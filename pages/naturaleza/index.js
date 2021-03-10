import Head from "next/head";
import ImageBanner from "../../components/c_002-ImageBanner/ImageBanner";
// --||----||----|| JSON DATA ||----||----||-- //
import { BANNER_DATA } from "../../jsonData/naturaleza/bannerData";
// --||----||----|| JSON DATA ||----||----||-- //
import styles from "../../styles/Home.module.css";

const Naturaleza = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Naturaleza - Nativo 27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImageBanner
        srcImage="/photos/naturaleza/bg-naturaleza.jpg"
        color="secondary"
        data={BANNER_DATA}
      />
    </main>
  );
};

export default Naturaleza;
