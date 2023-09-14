import React from "react";
import Slider from "react-slick";
import Testimonial from "../Items/Testimonial";

const testimonialsData = [
  {
    id: 1,
    content: ` I wanted to congratulate Mona Mohammed on doing such an amazing job of frontend development for me. She is very helpful and approachable and is always available to answer any questions. It was fun and interesting working with you Mona and hope I can work with you again in the near future. I would highly recommend working with her! `,
    // authorImage: "images/customer-1.png",
    authorName: "Vinay Thakur",
    authorStatus: "Upwork",
  },
  {
    id: 2,
    content:
      " Mona is a talented React developer, willing to work hard to give the best React apps for her clients, I recommend you to work with Mona. ",
    // authorImage: "images/customer-2.png",
    authorName: "Mohammed Shamia",
    authorStatus: "React.js Trainer",
  },
  {
    id: 3,
    content:
      "Mona is an Awesome react developer with great skills. We created a professional product, great communication, and easy to deal with. I really recommended her, and we totally work again in the future ",
    // authorImage: "",
    authorName: "Hamdi Hijazi",
    authorStatus: "React.js Developer",
  },
  {
    id: 4,
    content: ` Mona is very talented, she generally thinks outside the box the whole time trying to find a great
    solution, she applies best practices to all things, she is committed to delivery on time, and I am
    willing to deal with her every time.
    I recommend her.
    `,
    // authorImage: "",
    authorName: "Mohamed Yosef",
    authorStatus: "Upwork",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-wrapper">
      <Slider {...settings} className="padding-slider">
        {testimonialsData.map((testimonial) => (
          <Testimonial testimonial={testimonial} key={testimonial.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
