import React from "react";
import WhatApp from "../assets/WhatsApp.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote } from "lucide-react";
import { Testimonials } from "../constants";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
    <div className="card-list">
      <Slider {...settings} className="mx-10">
        {Testimonials.map((testimonial) => {
          return (
            <div className="w-80 h-[300px] md:h-80 space-y-4 bg-gray-100 px-4 py-8 rounded-lg relative">
              <Quote className="text-blue-600" />
              <div className="text-gray-600 text-sm lg:text-lg">
                {testimonial.text}
              </div>
              <div className="flex items-center gap-4 absolute bottom-3 ">
                <img
                  src={testimonial.image}
                  alt=""
                  className="w-16 h-16 rounded-full border"
                />
                <div>
                  <h2 className="">{testimonial.name}</h2>
                  <p className="">{testimonial.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonial;
