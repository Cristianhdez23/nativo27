import Head from "next/head";
import ImageBanner from "../../components/c_002-ImageBanner/ImageBanner";
import DividerSection from "../../components/c_004-DividerSection/DividerSection";
// --||----||----|| JSON DATA ||----||----||-- //
import { BANNER_DATA } from "../../jsonData/naturaleza/1-bannerData";
import { DIVIDER_DATA_NATURALEZA } from "../../jsonData/naturaleza/3-DividerSectionData";
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

      <DividerSection color="primary" data={DIVIDER_DATA_NATURALEZA} />
    </main>
  );
};

export default Naturaleza;
