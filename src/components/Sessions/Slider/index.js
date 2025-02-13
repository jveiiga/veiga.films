import React, { useState, useEffect } from 'react';
import { CarouselContainer, Slide, TextOverlay } from './index.styles';

// Importa todas as imagens da pasta assets/images
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../../assets/images/slider', false, /\.(png|jpe?g|svg)$/));

// Lista de slides (imagens e textos)
const slides = [
  { image: images[3], text: "Casamentos" },
  { image: images[4], text: "Chá Revelação" },
  { image: images[0], text: "Aniversários" },
  { image: images[1], text: "Artistas" },
  { image: images[5], text: "Institucional" },
  { image: images[2], text: "Carros" },
  { image: images[6], text: "Tatuagens" },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Troca de slides a cada 5 segundos
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, []);
  
  return (
    <CarouselContainer>
      {slides.map((slide, index) => (
        <Slide
          key={index}
          image={slide.image}
          className={index === currentSlide ? 'active' : ''}
        >
          {index === currentSlide && (
            <TextOverlay>{slide.text}</TextOverlay>
          )}
        </Slide>
      ))}
    </CarouselContainer>
  );
}

export default Slider;