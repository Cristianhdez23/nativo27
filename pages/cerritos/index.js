import Head from "next/head";
import ImageBanner from "../../components/c_002-ImageBanner/ImageBanner";
import CarouselSection from "../../components/c_003-CarouselSection/CarouselSection";
import styles from "../../styles/Home.module.css";

const Cerritos = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Cerritos - Nativo 27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImageBanner
        srcImage="/photos/2020_Blizzconline_Zoom_background_WOW_01.jpeg"
        title="El encanto del eje cafetero"
      />
      <CarouselSection />
      <CarouselSection textToLeft/>
    </main>
  );
};

export default Cerritos;
