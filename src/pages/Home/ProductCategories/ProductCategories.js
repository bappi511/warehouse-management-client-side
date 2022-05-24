import React from 'react';
import Slider from "react-slick";
import slider1 from '../../../images/slider/slider1.jpg';
import slider2 from '../../../images/slider/slider2.jpg';
import slider3 from '../../../images/slider/slider3.jpg';
import slider4 from '../../../images/slider/slider4.jpg';
import slider5 from '../../../images/slider/slider5.jpg';
import slider6 from '../../../images/slider/slider6.jpg';


const ProductCategories = () => {
    let settings_1 = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <div className='mt-5 mb-5'>
            <div className="container">
                <Slider  {...settings_1}>
                    <div>
                        <img className='img-fluid' src={slider1} alt="" />
                    </div>
                    <div>
                        <img className='img-fluid' src={slider2} alt="" />
                    </div>
                    <div>
                        <img className='img-fluid' src={slider3} alt="" />
                    </div>
                    <div>
                        <img className='img-fluid' src={slider4} alt="" />
                    </div>
                    <div>
                        <img className='img-fluid' src={slider5} alt="" />
                    </div>
                    <div>
                        <img className='img-fluid' src={slider6} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default ProductCategories;