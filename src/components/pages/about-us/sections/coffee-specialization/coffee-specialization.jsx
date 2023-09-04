//CSS
import Slider from "react-slick";
import "./coffee-specialization.css";
//Other
import React from "react";

function CoffeeSpecialization() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="CoffeeSpecialization">
      <div className="coffee-specialization-container">
        <div className="coffee-specialization-left" />
        <div className="coffee-specialization-slider">
          <Slider {...settings}>
            <div>
              <div className="coffee-specialization-slider-item">
                <h3 className="coffee-specialization-slider-item-title">
                  Çekirdek Seçimi
                </h3>
                <p>
                  Kahve tutkumuz, en temel aşamada başlar: çekirdek seçimi. En
                  iyi kahveyi sunabilmek için dünyanın dört bir yanından gelen
                  özel çekirdekleri özenle seçiyoruz. Sadece yüksek kaliteli,
                  taze ve iz bırakan aromalar taşıyan çekirdekleri tercih
                  ediyoruz. Bu, her bir fincanımızın temelinde yatan sırrın
                  başlangıcıdır.
                </p>
              </div>
            </div>
            <div>
              <div className="coffee-specialization-slider-item">
                <h3 className="coffee-specialization-slider-item-title">
                  İşleme Yöntemlerimiz
                </h3>
                <p>
                  Çekirdeklerimizi aldıktan sonra, işleme yöntemlerimiz
                  olağanüstü bir özen ve titizlik gerektirir. Kızartma
                  işlemimiz, her çekirdeği maksimum lezzet ve aroma açığa
                  çıkarana kadar özel bir şekilde ayarlanır. Hangi kızartma
                  seviyesinin hangi çekirdeğe en uygun olduğunu anlamak için
                  yılların deneyimine sahibiz.
                </p>
              </div>
            </div>
            <div>
              <div className="coffee-specialization-slider-item">
                <h3 className="coffee-specialization-slider-item-title">
                  Mükemmel Bir Fincan Kahve
                </h3>
                <p>
                  Kahve demleme sanatını ustaca icra ediyoruz. Kahveyi demlerken
                  suyun sıcaklığı, süre ve çekirdek-su oranı gibi unsurlara en
                  yüksek dikkati gösteriyoruz. Her fincan kahveyi hazırlarken,
                  içeceğinizin tadını ve kalitesini en üst düzeye çıkarmak için
                  büyük bir özenle çalışırız.
                </p>
              </div>
            </div>
            <div>
              <div className="coffee-specialization-slider-item">
                <h3 className="coffee-specialization-slider-item-title">
                  Çalışma Yaklaşımımız
                </h3>
                <p>
                  İşimiz sadece bir içeceği sunmakla sınırlı değil, aynı zamanda
                  bir deneyim sunmakla da ilgilidir. Müşterilerimizi ağırlarken,
                  kahvenin tadını çıkarırken ve kahveyle ilgili herhangi bir
                  soru sorduklarında, içtenlikle yanıtlarız. Ayrıca,
                  müşterilerimizin taleplerine özel çözümler sunarak, herkesin
                  en sevdiği kahveyi bulmasına yardımcı oluruz.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CoffeeSpecialization;
