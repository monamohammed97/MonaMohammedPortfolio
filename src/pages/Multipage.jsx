import React, { useEffect, useState } from "react";
import Layout2 from "../components/Layout/Layout2";
import Herosection from "../components/Sections/Herosection";
import LoadingScreen from "../components/Loading/LoadingScreen";

function Multipage() {
  const [isloading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout2>{isloading ? <LoadingScreen /> : <Herosection />}</Layout2>;
}

export default Multipage;
