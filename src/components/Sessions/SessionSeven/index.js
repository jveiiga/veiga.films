import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Modal from 'react-modal';
import { Container, Title, ContainerPhotos, PhotoBox, PhotoText, CloseButton, ModalContent } from './index.styles';

// Import das imagens
import img1 from '../../../assets/images/cases/kruguer.jpg';
import img2 from '../../../assets/images/cases/preta.jpg';
import img3 from '../../../assets/images/cases/alongamento.jpg';
import img4 from '../../../assets/images/cases/work.jpg';
import img5 from '../../../assets/images/cases/bruno-carro.jpg';
import img6 from '../../../assets/images/cases/mega.jpg';
import img7 from '../../../assets/images/cases/casal-nasa.jpg';
import img8 from '../../../assets/images/cases/mamae-nenem.jpg';
import img9 from '../../../assets/images/cases/minnie-sorrindo.jpg';

Modal.setAppElement('#root'); // Define o elemento root para acessibilidade

function SessionSix() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const photos = [
        { src: img1, text: 'Ensaio Pessoal' },
        { src: img2, text: 'Sensual Artistico' },
        { src: img3, text: 'Acadêmia' },
        { src: img4, text: 'Trabalho' },
        { src: img5, text: 'Influencers' },
        { src: img6, text: 'Cantores' },
        { src: img7, text: 'Casal' },
        { src: img8, text: 'Familía' },
        { src: img9, text: 'Nenêm' },
    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [currentText, setCurrentText] = useState('');

    const openModal = (image, text) => {
        setCurrentImage(image);
        setCurrentText(text);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentImage('');
        setCurrentText('');
    };

    return (
        <Container>
            <Title ref={ref} isVisible={inView}>Cases</Title>
            <ContainerPhotos>
                {photos.map((photo, index) => (
                    <PhotoBox
                        key={index}
                        image={photo.src}
                        isVisible={inView}
                        delay={index * 0.5}
                        onClick={() => openModal(photo.src, photo.text)}
                    >
                        <PhotoText isVisible={inView}>{photo.text}</PhotoText>
                    </PhotoBox>
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
                    <p>{currentText}</p>
                </ModalContent>
            </Modal>
        </Container>
    );
}

export default SessionSix;