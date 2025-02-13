import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Brands, BrandsNumber, ContainerNumbers, Container, ContainerCentral, ContainerTitle, Days, DaysNumber, Prod, ProdNumber, Text, Videos, VideosNumber, Years, YearsNumber, Box } from "./index.styles";

function SessionNine() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <Container ref={ref}>
            <ContainerCentral>
                <ContainerTitle>
                    <Text className={inView ? 'visible' : ''}>
                        retrospectiva 2024
                    </Text>
                </ContainerTitle>
                <ContainerNumbers>
                    <Box>
                        <Prod>produções</Prod>
                        <ProdNumber>
                            {inView && <CountUp start={0} end={50} duration={2.75} />}
                        </ProdNumber>
                    </Box>
                    <Box>
                        <Days>Dias em Campo</Days>
                        <DaysNumber>
                            {inView && <CountUp start={0} end={298} duration={2.75} />}
                        </DaysNumber>
                    </Box>
                    <Box>
                        <Videos>vídeos produzidos</Videos>
                        <VideosNumber>
                            {inView && <CountUp start={0} end={354} duration={2.75} />}
                        </VideosNumber>
                    </Box>
                    <Box>
                        <Brands>marcas atendidas</Brands>
                        <BrandsNumber>
                            {inView && <CountUp start={0} end={12} duration={5.75} />}
                        </BrandsNumber>
                    </Box>
                    <Box>
                        <Years>anos de mercado</Years>
                        <YearsNumber>
                            {inView && <CountUp start={0} end={4} duration={5.75} />}
                        </YearsNumber>
                    </Box>
                </ContainerNumbers>
            </ContainerCentral>
        </Container>
    );
}

export default SessionNine;