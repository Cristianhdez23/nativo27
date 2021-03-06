import Head from "next/head";
import ImageBanner from "../../components/c_002-ImageBanner/ImageBanner";
import DividerSection from "../../components/c_004-DividerSection/DividerSection";
import ImageSection from "../../components/c_005-ImageSection/ImageSection";
import MapSection from "../../components/c_009-MapSection/MapSection";
import ContactForm from "../../components/c_010-ContactForm/ContactForm";
import Footer from '../../components/c_008-Footer/Footer';
// --||----||----|| JSON DATA ||----||----||-- //
import { BANNER_DATA } from "../../jsonData/cerritos/1-bannerData";
import { SECOND_IMAGE_SECTION_DATA } from "../../jsonData/cerritos/2-imageSectionData";
import { THIRD_IMAGE_SECTION_DATA } from "../../jsonData/cerritos/3-imageSectionData";
import { DIVIDER_DATA_CERRITOS } from "../../jsonData/cerritos/4-DividerSectionData";
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
        srcImage="/photos/cerritos/1-Banner-Image.jpg"
        color="primary"
        data={BANNER_DATA}
      />

      <ImageSection
        srcImage="/photos/cerritos/2-Section-Image.jpg"
        isImageToLeft
        data={SECOND_IMAGE_SECTION_DATA}
      />

      <DividerSection
        srcImage="/photos/cerritos/3-Divider-Image.jpg"
        useImageOnly
      />

      <ImageSection
        srcImage="/photos/cerritos/4-Section-Image.jpg"
        isImageToRight
        data={THIRD_IMAGE_SECTION_DATA}
      />
  
      <DividerSection color="fourth" data={DIVIDER_DATA_CERRITOS} />

      <MapSection />
      <ContactForm />

      <Footer />
    </main>
  );
};

export default Cerritos;
