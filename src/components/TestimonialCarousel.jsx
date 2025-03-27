import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        name: "HARI DK",
        location: "ERNAKULAM, KERALA",
        message: "I highly recommend ClearTax to all consultants/entrepreneurs like me who need guidance to understand how the cryptic Indian tax law applies to them.",
        img: "https://d2s63alnkuz6gf.cloudfront.net/assets/website/landing_page/testimonials/hari.jpg", // Replace with actual image
    },
    {
        name: "NANDITA SAINI",
        location: "BANGALORE, KARNATAKA",
        message: 'I used the Clear Tax "Expert Assisted E-Filing Plan", everything was handled very smoothly. Thank you ClearTax.',
        img: "https://d2s63alnkuz6gf.cloudfront.net/assets/website/landing_page/testimonials/manmohan.jpg",
    },
    {
        name: "JYOTSNA PAUL",
        location: "BANGALORE, KARNATAKA",
        message: "Enter ClearTax. There is 100% transparency. Simply unbelievable! ClearTax is the new way to e-file returns.",
        img: "https://d2s63alnkuz6gf.cloudfront.net/assets/website/landing_page/testimonials/nandita_saini.jpg",
    },
    {
        name: "JYOTSNA PAUL",
        location: "BANGALORE, KARNATAKA",
        message: "Enter ClearTax. There is 100% transparency. Simply unbelievable! ClearTax is the new way to e-file returns.",
        img: "https://d2s63alnkuz6gf.cloudfront.net/assets/website/landing_page/testimonials/jyotsna_paul.jpg",
    },
    {
        name: "JYOTSNA PAUL",
        location: "BANGALORE, KARNATAKA",
        message: "Enter ClearTax. There is 100% transparency. Simply unbelievable! ClearTax is the new way to e-file returns.",
        img: "https://d2s63alnkuz6gf.cloudfront.net/assets/website/landing_page/testimonials/nandita_saini.jpg",
    },
];

const TestimonialCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
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
        <div className="max-w-full px-12 mx-auto ">
            <h2 className="text-5xl tracking-tighter font-bold text-center mb-8">
                See what our clients have to say
            </h2>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="px-4 py-4">
                        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                            <p className="text-gray-700">{testimonial.message}</p>
                            <div className="flex items-center mt-30">
                                <img
                                    src={testimonial.img}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <p className="font-bold">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500 ">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialCarousel;
