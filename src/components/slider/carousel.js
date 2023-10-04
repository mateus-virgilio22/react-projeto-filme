import React from 'react';
import './carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Foto_1 from '../../assets/imagens/personagem1.jpeg'
import Foto_2 from '../../assets/imagens/personagem2.jpg'
import Foto_3 from '../../assets/imagens/personagem3.jpg'

class ImageSlider extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      
      const images = [Foto_1, Foto_2, Foto_3];
  
      return (
        <div className="image-slider">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img className="img_slide" src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      );
    }
  }
  
  export default ImageSlider;
  