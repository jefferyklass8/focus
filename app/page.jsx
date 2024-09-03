"use client";

// components
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";

// implement lenis smooth scroll
import { ReactLenis } from "lenis/dist/lenis-react";

const Home = () => {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <Brands />
        {/* temporary div */}
        <div className="h-[8000px]"></div>
      </ReactLenis>
    </>
  );
};

export default Home;
