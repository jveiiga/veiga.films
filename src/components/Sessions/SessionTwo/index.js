import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Text } from "./index.styles";

function SessionTwo() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addListener(handleMediaQueryChange);
        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    return (
        <Container ref={ref}>
            <Text className={inView || isMobile ? 'visible' : ''}>
                <p>Em um mundo cada vez mais digital, são as experiências autênticas que verdadeiramente tocam nossa alma. Cada momento vivido intensamente carrega consigo uma história única - o calor de um encontro espontâneo, a sinceridade de um sorriso genuíno, a magia dos pequenos gestos que fazem toda diferença.</p> <br/>
                <p>Na Veiga Films, transformamos esses momentos preciosos em narrativas visuais que emocionam. Dedicados à arte de contar histórias através das lentes, nossa equipe de especialistas desenvolveu uma sensibilidade única para capturar a genuinidade de cada instante.</p> <br/>
                <p>Colaboramos com as marcas expressivas do mercado nacional, revolucionando a maneira de comunicar através de uma linguagem contemporânea e envolvente. Nossa expertise está em traduzir a essência do real em movimentos de câmera precisos, que dançam em sintonia com as emoções humanas.</p> <br/>
            </Text>
        </Container>
    );
}

export default SessionTwo;

