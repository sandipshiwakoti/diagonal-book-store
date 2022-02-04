import React from "react";
import HeroBanner from "../components/home/HeroBanner";
import NewRelease from "../components/home/NewRelease";
import useTitle from "../customHooks/useTitle";

const Home = () => {
  useTitle("Home | Diagonal Book Store");

  return (
    <section>
      <HeroBanner />
      <NewRelease />
    </section>
  );
};

export default Home;
