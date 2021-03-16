import Head from "next/head";
import ImageBanner from "../../components/c_002-ImageBanner/ImageBanner";
import DividerSection from "../../components/c_004-DividerSection/DividerSection";
import ImageSection from "../../components/c_005-ImageSection/ImageSection";
import CarouselSection from "../../components/c_003-CarouselSection/CarouselSection";
import CarouselBanner from "../../components/c_006-CarouselBanner/CarouselBanner";
import Footer from '../../components/c_008-Footer/Footer';
// --||----||----|| JSON DATA ||----||----||-- //
import { BANNER_DATA } from "../../jsonData/cerritos/1-bannerData";
import { SECOND_IMAGE_SECTION_DATA } from "../../jsonData/cerritos/2-imageSectionData";
import { THIRD_IMAGE_SECTION_DATA } from "../../jsonData/cerritos/3-imageSectionData";

import { DIVIDER_DATA_CERRITOS } from "../../jsonData/cerritos/4-DividerSectionData";
import { DIVIDER_DATA_ARQUITECTURA } from "../../jsonData/arquitectura/3-DividerSectionData";
import { DIVIDER_DATA_HOMEPAGE } from "../../jsonData/homepage/4-DividerSectionData";
import { DIVIDER_DATA_NATURALEZA } from "../../jsonData/naturaleza/3-DividerSectionData";

import { CAROUSEL_DATA } from "../../jsonData/arquitectura/2-carouselData";
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

      <DividerSection
        srcImage="/photos/2020_Blizzconline_Zoom_background_WOW_01.jpeg"
        useImageOnly
      />

      <ImageSection
        srcImage="/photos/cerritos/img-two-section-cerritos.jpg"
        isImageToRight
        data={THIRD_IMAGE_SECTION_DATA}
      />

      {/* Main Page */}
      <DividerSection color="tertiary" data={DIVIDER_DATA_HOMEPAGE} />
      {/* Naturaleza Page */}
      <DividerSection color="primary" data={DIVIDER_DATA_NATURALEZA} />
      {/* Arquitectura Page */}
      <DividerSection color="secondary" data={DIVIDER_DATA_ARQUITECTURA} />
      {/* Cerritos Page */}
      <DividerSection color="fourth" data={DIVIDER_DATA_CERRITOS} />

      <CarouselSection data={CAROUSEL_DATA} />

      <CarouselBanner color="primary" data={BANNER_DATA} />

      <Footer />
    </main>
  );
};

export default Cerritos;
