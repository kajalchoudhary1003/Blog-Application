import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner-bg bg-cover bg-no-repeat h-screen flex justify-center items-center mt-1">
        <span className="slogan tracking-wide font-bold text-7xl pt-56 text-dark-green-banner">
          Where Ideas Unite, <br />
          <span className="pt-10 ml-10">Knowledge Ignites !</span>
        </span>
      </div>
    </>
  );
};

export default Banner;
