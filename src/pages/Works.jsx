import React, { useEffect, useState } from "react";
import Layout2 from "../components/Layout/Layout2";
import SectionHeading from "../components/Items/SectionHeading";
import Portfolios2 from "../components/Sections/Portfolios2";
import LoadingScreen from "../components/Loading/LoadingScreen";

function Works() {
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
        <section className="shadow-blue white-bg padding mt-0 min-100">
          <SectionHeading title="Portfolio" />
          <Portfolios2 />
        </section>
      )}
    </Layout2>
  );
}

export default Works;
