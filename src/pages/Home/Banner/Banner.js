import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import "./Banner.css";
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="First slide"
                />

                <Carousel.Caption style={{ width: '35%' }} className='carousel-caption'>
                    <h5 style={{
                        textShadow: '2px 2px black '
                    }}>FIND YOUR PERFECT TV <br />
                        AT A LOWER PRICE</h5>
                    <p style={{
                        textShadow: '2px 2px black '
                    }} className='fw-bold'><small>
                            Browse our selection of refurbished televisions<br />at lower prices than the high street.
                        </small></p>
                    <button className='btn btn-light'>ALL TELEVISIONS</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Second slide"
                />
                <Carousel.Caption style={{ width: '35%' }} className=' mb-4'>
                    <p style={{
                        textShadow: '2px 2px black '
                    }} className='fw-bold'>The new era of screen resolutions starts now. <br />Experience the amazing clarity of 8K today.</p>
                    <button className='btn btn-light'>SHOP NOW</button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption style={{ width: '35%' }} className='mb-4'>
                    <h5 style={{
                        textShadow: '2px 2px black '
                    }}>CREATE YOUR OWN <br />
                        HOME CINEMA</h5>
                    <p style={{
                        textShadow: '2px 2px black '
                    }} className='fw-bold'><small>
                            Search through our range of large size TV’s to<br />
                            bring the cinema viewing experience home.
                        </small></p>
                    <button className='btn btn-light'>SHOP NOW</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;