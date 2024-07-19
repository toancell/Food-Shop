import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Menu from "../assets/menu.json";
import { useState } from "react";
import Cards from "./Cards";
import { useRef, useEffect } from "react";
function SliderDish() {
  const [recipes, setRecipes] = useState([]);
  const slider = useRef(null);

  useEffect(() => {
    const specials = Menu.filter((item) => item.category === "popular");
    setRecipes(specials);
  }, []);
  console.log(recipes);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container px-5 mx-auto w-[80%] ">
      <Slider {...settings}>
        {recipes.map((item) => (
          <Cards key={item._id} item={item}/>
        ))}
      </Slider>
    </div>
  );
}

export default SliderDish;
