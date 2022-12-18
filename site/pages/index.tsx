import type { NextPage } from "next";
import Head from "next/head";
import Copycat from "../components/copycat";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Copycat | AI Powered Marketing</title>
        <meta
          name="description"
          content="Generate branding snippets for your product."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Copycat />
    </div>
  );
};

export default Home;