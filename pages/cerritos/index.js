import Head from "next/head";
import ImageBanner from "../../components/c_002-ImageBanner/ImageBanner";
import ImageSection from "../../components/c_005-ImageSection/ImageSection";
// --||----||----|| JSON DATA ||----||----||-- //
import { BANNER_DATA } from "../../jsonData/cerritos/1-bannerData";
import { SECOND_IMAGE_SECTION_DATA } from "../../jsonData/cerritos/2-imageSectionData";
import { THIRD_IMAGE_SECTION_DATA } from "../../jsonData/cerritos/3-imageSectionData";
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

      <ImageSection
        srcImage="/photos/cerritos/img-section-cerritos.jpg"
        isImageToLeft
        data={SECOND_IMAGE_SECTION_DATA}
      />

      <ImageSection
        srcImage="/photos/cerritos/img-two-section-cerritos.jpg"
        isImageToRight
        data={THIRD_IMAGE_SECTION_DATA}
      />
    </main>
  );
};

export default Cerritos;
