import React from 'react';
import { Container, MarqueeText } from './index.styles';

function InfiniteAnimation() {
    const text = " Produção criativa para marcas e momentos inesquecíveis. A essência jovem de quem nasceu na era da inovação. Soluções audiovisuais que conectam marcas e histórias. A visão moderna de uma geração movida pelo digital. ";
    
    return (
        <Container>
            <MarqueeText>
                {text.repeat(3) + " "}
            </MarqueeText>
            <MarqueeText>
                {text.repeat(3) + " "}
            </MarqueeText>
        </Container>
    );
}

export default InfiniteAnimation;