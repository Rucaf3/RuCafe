import React from 'react';
import styles from './carousel.module.scss';
import image1 from '../../../../assets/Promo1.png';
import image2 from '../../../../assets/Promo2.png';
import image3 from '../../../../assets/Promo3.png';
import image4 from '../../../../assets/Promo4.png';

const images = [
  { src: image1, alt: 'Promo 1', description: '2 licuado del mismo sabor + 1 jamón y queso', precio: '$3700' },
  { src: image2, alt: 'Promo 2', description: '2 infusiones + 1 jamón y queso', precio: '$6800' },
  { src: image3, alt: 'Promo 3', description: 'Descripción de la Promo 3', precio: '$6000' },
  { src: image4, alt: 'Promo 4', description: 'Descripción de la Promo 4', precio: '$3500' }
];

export default function Carousel() {
  return (
    <div>
      <div className={styles['Carousel-container']}>
        {images.map((image, index) => (
          <div key={index} className={styles['Carousel-item']}>
            <img src={image.src} alt={image.alt} />
            <div className={styles['description']}>
              {image.description}
              <br />
              {image.precio}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}