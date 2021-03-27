import Head from "next/head";
import ImageBanner from "../../components/c_002-ImageBanner/ImageBanner";
import CarouselSection from "../../components/c_003-CarouselSection/CarouselSection";
import DividerSection from "../../components/c_004-DividerSection/DividerSection";
import TabsSection from "../../components/c_007-TabsSection/TabsSection";
import MapSection from "../../components/c_009-MapSection/MapSection";
import ContactForm from "../../components/c_010-ContactForm/ContactForm";
import Footer from "../../components/c_008-Footer/Footer";
// --||----||----|| JSON DATA ||----||----||-- //
import { BANNER_DATA } from "../../jsonData/arquitectura/1-bannerData";
import { CAROUSEL_DATA } from "../../jsonData/arquitectura/2-carouselData";
import { DIVIDER_DATA_ARQUITECTURA } from "../../jsonData/arquitectura/3-DividerSectionData";
import { TABS_SECTION } from "../../jsonData/arquitectura/4-TabsSectionData";
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
        srcImage="/photos/arquitectura/1-Banner-Image.jpg"
        color="tertiary"
        data={BANNER_DATA}
      />

      <CarouselSection data={CAROUSEL_DATA} />

      <DividerSection color="secondary" data={DIVIDER_DATA_ARQUITECTURA} />

      <TabsSection data={TABS_SECTION} />

      <DividerSection
        srcImage="/photos/arquitectura/5-Divider-Image.jpg"
        useImageOnly
      />

      <MapSection />
      <ContactForm />

      <Footer />
    </main>
  );
};

export default Arquitectura;
