import React from 'react';
import { useState } from 'react';
import Slider from "react-slick"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Card from './Card'

const Carousel = ({ slides, title }) => {


    const NextArrow = ({ onClick }) => {
        return (
            <ArrowForwardIcon className="arrow next" onClick={onClick} />
        )
    }


    const PrevArrow = ({ onClick }) => {
        return (
            <ArrowBackIcon className="arrow prev" onClick={onClick} />
        )
    }

    const [cardsIndex, setCardsIndex] = useState(0);
    
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setCardsIndex(next),
    };

    return (
        <section className="slider">
            <Slider {...settings}>
                {
                    slides.map((slide, index) => {
                        return (
                            <Card key={index} image={slide.image} title={slide.title} description={slide.description} classes={cardsIndex === index ? "card active-card" : "card"}/>
                        )
                    })
                }
            </Slider>
        </section>
    )
}

export default Carousel