//CSS
import "./specials.css";
//JSON
import productJson from "../../../../json/products.json";
//Other
import React from "react";
import Slider from "react-slick";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Specials() {
  const navigation = useNavigate();

  const settings = {
    arrows: true,
    autoplay: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  function randomArrayCreate(array, count) {
    const copyArray = [...array]; // Orjinal diziyi bozmamak için bir kopya oluşturun
    const randomElements = [];

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * copyArray.length); // Rastgele bir index seçin
      const randomElement = copyArray.splice(randomIndex, 1)[0]; // Seçilen elemanı diziden çıkarın ve randomElements dizisine ekleyin
      randomElements.push(randomElement);
    }

    return randomElements;
  }

  const specials = randomArrayCreate(productJson.products, 8);
  return (
    <div className="Specials">
      <h2 className="specials-title"> Specials</h2>
      <div className="specials-slider">
        <Slider {...settings}>
          {specials.map((item, key) => {
            return (
              <div key={key}>
                <div className="specials-slider-item">
                  <div className="specials-slider-item-image">
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </div>
                  <div className="specials-slider-item-texts">
                    <div>
                      <h2>{item.name}</h2>
                      <p>{item.category}</p>
                    </div>
                    <p>
                      <AiOutlineClockCircle className="icon" /> {item.orderTime}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      navigation(`/menu/products/${item.name}/${item.no}`);
                    }}
                  >
                    details
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <button
        className="specials-show-more-button"
        onClick={() => {
          navigation(`/menu/all`);
        }}
      >
        show more coffee
      </button>
    </div>
  );
}

export default Specials;
