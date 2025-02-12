import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Modal from 'react-modal';
import { Container, Title, ContainerPhotos, PhotoBox, CloseButton, ModalContent } from './index.styles';

// Artistas
import img1 from '../../../assets/images/cases/belo.jpg';
import img2 from '../../../assets/images/cases/mc.jpg';
import img3 from '../../../assets/images/cases/gp.jpg';
// Carros
import img4 from '../../../assets/images/cases/bmw-carro.jpg';
import img5 from '../../../assets/images/cases/bmw-moto.jpg';
import img6 from '../../../assets/images/cases/audi.jpg';
// Tatuagem
import img7 from '../../../assets/images/cases/mulher-tatuagem.jpg';
import img8 from '../../../assets/images/cases/trampo-tatuagem.jpg';
import img9 from '../../../assets/images/cases/tatuando.jpg';

Modal.setAppElement('#root'); // Define o elemento root para acessibilidade

function SessionSix() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const openModal = (image) => {
        setCurrentImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentImage('');
    };

    return (
        <Container>
            <Title ref={ref} isVisible={inView}>Cases</Title>
            <ContainerPhotos>
                {photos.map((photo, index) => (
                    <PhotoBox
                        key={index}
                        image={photo}
                        isVisible={inView}
                        delay={index * 0.5}
                        onClick={() => openModal(photo)} // Define a função de clique
                    />
                ))}
            </ContainerPhotos>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
                    content: { 
                        top: '50%', 
                        left: '50%', 
                        right: 'auto', 
                        bottom: 'auto', 
                        marginRight: '-50%', 
                        transform: 'translate(-50%, -50%)', 
                        maxWidth: '90%', 
                        maxHeight: '90%' 
                    }
                }}
            >
                <ModalContent>
                    <CloseButton onClick={closeModal}>×</CloseButton>
                    <img src={currentImage} alt="" style={{ width: '100%', height: 'auto', maxHeight: '80vh' }} />
                </ModalContent>
            </Modal>
        </Container>
    );
}

export default SessionSix;