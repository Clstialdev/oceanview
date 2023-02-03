import { type NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Services from "../sections/Services";
import Stats from "../sections/Stats";
import Testimonials from "../sections/Testimonials";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ocean View Games</title>
        <meta name="description" content="Ocean View Games is a ..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Body Code Starts Here */}
      <main>
        {/* Header */}
        <Header />

        {/* Section 1 */}
        <Hero />

        {/* Section 2 */}
        <About />

        {/* Section 3 */}
        <Services />

        {/* Section 4 */}
        <Stats />

        {/* Section 5 */}
        <Projects />

        {/* Section 6 */}
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
