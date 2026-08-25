import React from 'react';
import styles from './carousel.module.scss';
import image2 from '../../../../assets/Promo1.jpg';
import image3 from '../../../../assets/Promo2.jpg';
import image4 from '../../../../assets/Promo3.jpg';
import image1 from '../../../../assets/Promo4.jpg';
import image5 from '../../../../assets/PromoHsTranquila.jpg';

const images = [
  { src: image5, alt: 'Promo 0', description: 'PROMO DESDE LAS 17:30 a 19:00hs', description2: '2 Infusiónes + 4 Tortillas',precio: '$7500' },
  { src: image1, alt: 'Promo 1', description: '1 Infusión + 1/2 de Jamón y Queso', precio: '$8800' },
  { src: image2, alt: 'Promo 2', description: '1 Licuados + 1/2 Jamón y Queso ', precio: '$9900' },
  { src: image3, alt: 'Promo 3', description: '2 Licuados (mismo sabor) + 1 Jamón y Queso', precio: '$16600' },
  { src: image4, alt: 'Promo 4', description: '2 Infusiónes + 1 de Jamón y Queso', precio: '$14400' }
];


export default function Carousel() {
  return (
    <div>
      <div className={styles.Carousel_container}>
        {images.map((image, index) => (
          <div key={index} className={styles.Carousel_item}>
            <img src={image.src} alt={image.alt} />
            <div className={styles.despiption}>
              {image.description}
              <br/>
              {image.description2}
              <br />
              {image.precio}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}