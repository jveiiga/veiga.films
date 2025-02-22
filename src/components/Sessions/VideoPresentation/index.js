import { Button, ButtonWrapper, Container, ContainerVideo } from "./index.styles";

function VideoPresentation() {
    const scrollToForm = () => {
        const formSection = document.getElementById('form-section');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Container>
            <ContainerVideo
                src="https://www.youtube.com/embed/PknCKp__sig"
                title="Vídeo da Produtora"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            <ButtonWrapper>
                <Button onClick={scrollToForm} type="text">Torne-se nosso cliente</Button>
            </ButtonWrapper>
        </Container>
    )   
}

export default VideoPresentation;