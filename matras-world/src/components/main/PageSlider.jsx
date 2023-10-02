import Slider from "react-slick";
import { sliderItems } from "../../data/fakeData";
import styles from "./PageSlider.module.scss";

const PageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.pageSlider}>
      <Slider {...settings}>
        {sliderItems.map((item) => {
          return (
            <div className={styles.sliderItem}>
              <img
                className={styles.sliderItemImg}
                src={item.img}
                alt={item.caption}
              />
              <p className={styles.sliderItemCation}>{item.caption}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PageSlider;
