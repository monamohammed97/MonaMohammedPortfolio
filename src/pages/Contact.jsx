import React, { useEffect, useState } from "react";
import Layout2 from "../components/Layout/Layout2";
import SectionHeading from "../components/Items/SectionHeading";
import ContactSection from "../components/Sections/Contact";
import LoadingScreen from "../components/Loading/LoadingScreen";

function Contact() {
  const [isloading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout2>
      {isloading ? (
        <LoadingScreen />
      ) : (
        <section className="shadow-blue white-bg padding mt-0 min-100">
          <SectionHeading title="Get in touch" />
          <ContactSection />
        </section>
      )}
    </Layout2>
  );
}

export default Contact;
