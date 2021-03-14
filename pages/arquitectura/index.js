import Head from "next/head";
import ImageBanner from "../../components/c_002-ImageBanner/ImageBanner";
import CarouselSection from "../../components/c_003-CarouselSection/CarouselSection";
import DividerSection from "../../components/c_004-DividerSection/DividerSection";
// --||----||----|| JSON DATA ||----||----||-- //
import { BANNER_DATA } from "../../jsonData/arquitectura/1-bannerData";
import { CAROUSEL_DATA } from "../../jsonData/arquitectura/2-carouselData";
import { DIVIDER_DATA_ARQUITECTURA } from "../../jsonData/arquitectura/3-DividerSectionData";
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

      <CarouselSection data={CAROUSEL_DATA}/>

      <DividerSection color="secondary" data={DIVIDER_DATA_ARQUITECTURA} />
    </main>
  );
};

export default Arquitectura;
