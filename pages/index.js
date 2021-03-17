import Head from "next/head";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import CarouselBanner from "../components/c_006-CarouselBanner/CarouselBanner";
import ImageSection from "../components/c_005-ImageSection/ImageSection";
import DividerSection from "../components/c_004-DividerSection/DividerSection";
import MapSection from "../components/c_009-MapSection/MapSection";
import Footer from "../components/c_008-Footer/Footer";
// --||----||----|| JSON DATA ||----||----||-- //
import { BANNER_DATA } from "../jsonData/homepage/1-bannerData";
import { SECOND_IMAGE_SECTION_DATA } from "../jsonData/homepage/2-imageSectionData";
import { THIRD_IMAGE_SECTION_DATA } from "../jsonData/homepage/3-imageSectionData";
import { DIVIDER_DATA_HOMEPAGE } from "../jsonData/homepage/4-DividerSectionData";
// --||----||----|| JSON DATA ||----||----||-- //
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Nativo 27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CarouselBanner color="primary" data={BANNER_DATA} />

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

      <DividerSection color="tertiary" data={DIVIDER_DATA_HOMEPAGE} />

      <MapSection data={SECOND_IMAGE_SECTION_DATA} />

      <Footer />
    </main>
  );
};

export default HomePage;
