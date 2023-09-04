import React from "react";
import AboutUsHeader from "./sections/header/about-us-header";
import AboutUsOurStory from "./sections/our-story/about-us-our-story";
import AboutUsMission from "./sections/mission/about-us-mission";
import CoffeeSpecialization from "./sections/coffee-specialization/coffee-specialization";
import AboutUsGallery from "./sections/gallery/about-us-gallery";

function AboutUs() {
  return (
    <div className="About-us">
      <AboutUsHeader />
      <AboutUsOurStory />
      <AboutUsMission />
      <CoffeeSpecialization />
      <AboutUsGallery />
    </div>
  );
}

export default AboutUs;
