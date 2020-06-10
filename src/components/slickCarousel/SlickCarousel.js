import React from 'react';
import Slider from 'react-slick';
import Card02 from '../card02/Card02';
import './slick-theme.css';
import './slick.css';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3500,
      dots: true,

      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            // slidesToScroll: 1,
            // swipeToSlide: true,
          },
        },
        {
          breakpoint: 675,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        {this.props.data.map(element => (
          <Card02
            key={element.id}
            title={element.title}
            img={element.img}
            subTitle={element.subTitle}
            desc={element.desc}
            classAdd="card02-slick"
          />
        ))}
      </Slider>
    );
  }
}

export default SimpleSlider;
