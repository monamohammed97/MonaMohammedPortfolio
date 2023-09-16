import React, { useEffect, useState } from "react";
import Layout2 from "../components/Layout/Layout2";
import SectionHeading from "../components/Items/SectionHeading";
import AboutSection from "../components/Sections/About";
import Skills from "../components/Sections/Skills";
import Funfacts from "../components/Sections/Funfacts";
import Testimonials from "../components/Sections/Testimonials";
import Clients from "../components/Sections/Clients";
import LoadingScreen from "../components/Loading/LoadingScreen";

function About() {
  const [isloading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout2>
      {isloading ? (
        <LoadingScreen />
      ) : (
        <>
          <section className="shadow-blue white-bg padding mt-0">
            <SectionHeading title="About Me" />
            <AboutSection />
          </section>

          <section className="shadow-blue white-bg padding">
            <SectionHeading title="My skills" />
            <Skills />
          </section>

          {/* <Funfacts /> */}

          <section className="shadow-blue white-bg padding">
            <SectionHeading title="Testimonials" />
            <Testimonials />
          </section>

          {/* <Clients /> */}
        </>
      )}
    </Layout2>
  );
}

export default About;
