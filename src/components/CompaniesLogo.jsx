import React from "react";
import Slider from "react-slick";

import { CompanyImages } from "../constants";

const CompaniesLogo = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
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
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-20 mx-10 lg:mt-20 lg:mx-20">
      <Slider {...settings}>
        {CompanyImages.map((img) => {
          return (
            <div className="">
              <img
                src={img}
                alt=""
                className="w-36 h-14 object-cover lg:w-64 lg:h-32 rounded-sm shadow-lg"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CompaniesLogo;
