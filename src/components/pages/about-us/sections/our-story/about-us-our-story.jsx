//CSS
import "./about-us-our-story.css";
//Other
import React from "react";
function AboutUsOurStory() {
  return (
    <div className="AboutUsOurStory">
      <div className="about-us-our-story-images">
        <div className="about-us-our-story-images-col-1">
          <img
            src="https://i.pinimg.com/564x/b5/9a/9b/b59a9b63cadbd4ea787792abae859510.jpg"
            alt="coffee 1"
            loading="lazy"
          />
          <img
            src="https://i.pinimg.com/564x/51/c6/68/51c66849566e471e62530c0df2777c1b.jpg"
            alt="coffee 2"
            loading="lazy"
          />
        </div>
        <div className="about-us-our-story-images-col-2">
          <img
            src="https://i.pinimg.com/564x/32/85/95/328595f3437fc2662d7db6accf65a776.jpg"
            alt="coffee 3"
            loading="lazy"
          />
          <img
            src="https://i.pinimg.com/564x/6c/17/f1/6c17f157818e8fa630df07fe26b8dd01.jpg"
            alt="coffee 4"
            loading="lazy"
          />
        </div>
      </div>
      <div className="about-us-our-story-texts">
        <h2>Our Story</h2>
        <p>
          What once started as a small neighborhood coffee shop has grown with
          passionate baristas and unique coffee flavors. This journey, which
          carries a smile in every cup, is enriched with every drop of coffee.
          We started with our passion for coffee and grew with you.
        </p>
      </div>
    </div>
  );
}

export default AboutUsOurStory;
