import React from "react";
import MainHeader from "./sections/header/main-header";
import OurStory from "./sections/our-story/our-story";
import Specials from "./sections/specials/specials";
import CoolPromise from "./sections/cool-promise/cool-promise";
import Gallery from "./sections/gallery/gallery";

function Main() {
  return (
    <div className="Main">
      <MainHeader />
      <OurStory />
      <Specials />
      <CoolPromise />
      <Gallery />
    </div>
  );
}

export default Main;
