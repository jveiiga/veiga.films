import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Title, Text } from './index.styles';

function SessionFive() {
  // Usando useInView para detectar quando o componente está visível
  const [ref, inView] = useInView({
    triggerOnce: true, // A animação só acontece uma vez
    threshold: 0.5, // Define que 50% do elemento deve estar visível
  });

  return (
    <Container ref={ref}>
      <Title isVisible={inView}>
        Qual o nosso diferencial?
      </Title>
      <Text isVisible={inView}>
        A Veiga Films se destaca pela combinação de criatividade e excelência técnica, entregando produções audiovisuais personalizadas e impactantes. Com uma abordagem centrada no cliente, alia storytelling cativante e inovação tecnológica, garantindo resultados que emocionam e comunicam com eficiência.
      </Text>
    </Container>
  );
}

export default SessionFive;