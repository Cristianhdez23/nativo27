import Head from "next/head";
import Image from "material-ui-image";
import Backdrop from '@material-ui/core/Backdrop';
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Nativo 27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.imageContainer}>
        <Image
          src="/photos/blizzard-cover.jpg"
          animationDuration={1000}
          disableSpinner
          style={{paddingTop: '0', height: '100%', width: '100%', objectFit: 'cover'}}
        />
      </section>
    </main>
  );
};

export default HomePage;
