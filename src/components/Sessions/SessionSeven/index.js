import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Modal from 'react-modal';
import { Container, Title, ContainerPhotos, PhotoBox, PhotoText, CloseButton, ModalContent, ModalImage, NavigationButton } from './index.styles';

// Import das imagens
//Ensaio Pessoal
import img1 from '../../../assets/images/cases/pessoal.jpg';
import img2 from '../../../assets/images/cases/pessoal-s1.jpg';
import img3 from '../../../assets/images/cases/pessoal-s2.jpg';
import img4 from '../../../assets/images/cases/pessoal-s3.jpg';
import img5 from '../../../assets/images/cases/pessoal-s4.jpg';
import img6 from '../../../assets/images/cases/pessoal-s5.jpg';
import img7 from '../../../assets/images/cases/pessoal-s6.jpg';
import img8 from '../../../assets/images/cases/pessoal-s7.jpg';
import img9 from '../../../assets/images/cases/pessoal-s8.jpg';
//Sensual Artistico
import img10 from '../../../assets/images/cases/preta.jpg';
import img11 from '../../../assets/images/cases/preta-s1.jpg';
import img12 from '../../../assets/images/cases/branca.jpg';
import img13 from '../../../assets/images/cases/branca-s1.jpg';
import img14 from '../../../assets/images/cases/branca-s2.jpg';
//Acadêmia
import img15 from '../../../assets/images/cases/academia.jpg';
import img16 from '../../../assets/images/cases/academia-s1.jpg';
import img17 from '../../../assets/images/cases/academia-s2.jpg';
import img18 from '../../../assets/images/cases/academia-s3.jpg';
import img19 from '../../../assets/images/cases/academia-s4.jpg';
import img20 from '../../../assets/images/cases/academia-s5.jpg';
import img21 from '../../../assets/images/cases/academia-s6.jpg';
//Trabalho
import img22 from '../../../assets/images/cases/work.jpg';
import img23 from '../../../assets/images/cases/work-s1.jpg';
import img24 from '../../../assets/images/cases/work-s2.jpg';
import img25 from '../../../assets/images/cases/work-s3.jpg';
import img26 from '../../../assets/images/cases/work-s4.jpg';
import img27 from '../../../assets/images/cases/work-s5.jpg';
//Influencers
import img28 from '../../../assets/images/cases/influencer.jpg';
import img29 from '../../../assets/images/cases/influencer-s1.jpg';
import img30 from '../../../assets/images/cases/influencer-s2.jpg';
import img31 from '../../../assets/images/cases/influencer-s3.jpg';
import img32 from '../../../assets/images/cases/influencer-s4.jpg';
//Cantores
import img33 from '../../../assets/images/cases/cantores.jpg';
import img34 from '../../../assets/images/cases/cantores-s1.jpg';
import img35 from '../../../assets/images/cases/cantores-s2.jpg';
import img36 from '../../../assets/images/cases/cantores-s3.jpg';
import img37 from '../../../assets/images/cases/cantores-s4.jpg';
import img38 from '../../../assets/images/cases/cantores-s5.jpg';
import img39 from '../../../assets/images/cases/cantores.s6.jpg';
import img40 from '../../../assets/images/cases/cantores-s7.jpg';
import img41 from '../../../assets/images/cases/cantores-s8.jpg';
import img42 from '../../../assets/images/cases/cantores-s9.jpg';
import img43 from '../../../assets/images/cases/cantores-s10.jpg';
//Casal
import img44 from '../../../assets/images/cases/casal.jpg';
import img45 from '../../../assets/images/cases/casal-s1 2.jpg';
import img46 from '../../../assets/images/cases/casal-s2.jpg';
import img47 from '../../../assets/images/cases/casal-s3.jpg';
import img48 from '../../../assets/images/cases/casal-s4.jpg';
import img49 from '../../../assets/images/cases/casal-s5.jpg';
import img50 from '../../../assets/images/cases/casal-s6.jpg';
//Familía
import img51 from '../../../assets/images/cases/familia.jpg';
import img52 from '../../../assets/images/cases/familia-s1.jpg';
import img53 from '../../../assets/images/cases/familia-s2.jpg';
import img54 from '../../../assets/images/cases/familia-s3.jpg';
import img55 from '../../../assets/images/cases/familia-s4.jpg';
//Nenêm
import img56 from '../../../assets/images/cases/nenem.jpg';
import img57 from '../../../assets/images/cases/nenem-s1.jpg';
import img58 from '../../../assets/images/cases/nenem-s2.jpg';
import img59 from '../../../assets/images/cases/nenem-s3.jpg';
import img60 from '../../../assets/images/cases/nenem-s4.jpg';
import img61 from '../../../assets/images/cases/nenem-s5.jpg';


Modal.setAppElement('#root'); // Define o elemento root para acessibilidade

function SessionSix() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const photos = [
        { src: [img1, img2, img3, img4, img5, img6, img7, img8, img9], text: 'Ensaio Pessoal' },
        { src: [img10, img11, img12, img13, img14], text: 'Sensual Artistico' },
        { src: [img15, img16, img17, img18, img19, img20, img21], text: 'Acadêmia' },
        { src: [img22, img23, img24, img25, img26, img27], text: 'Trabalho' },
        { src: [img28, img29, img30, img31, img32], text: 'Influencers' },
        { src: [img33, img34, img35, img36, img37, img38, img39, img40, img41, img42, img43], text: 'Cantores' },
        { src: [img44, img45, img46, img47, img48, img49, img50], text: 'Casal' },
        { src: [img51, img52, img53, img54, img55], text: 'Familía' },
        { src: [img56, img57, img58, img59, img60, img61], text: 'Nenêm' },
    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentPhotos, setCurrentPhotos] = useState([]);
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (photos, text) => {
        setCurrentPhotos(photos);
        setCurrentText(text);
        setCurrentIndex(0); // Inicia a visualização na primeira foto
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentPhotos([]);
        setCurrentText('');
        setCurrentIndex(0);
    };

    const prevPhoto = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : currentPhotos.length - 1));
    };

    const nextPhoto = () => {
        setCurrentIndex((prevIndex) => (prevIndex < currentPhotos.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <Container>
            <Title ref={ref} isVisible={inView}>Cases</Title>
            <ContainerPhotos>
                {photos.map((photo, index) => (
                    <PhotoBox
                        key={index}
                        image={photo.src[0]} // Exibe a primeira foto do tema
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
                    <NavigationButton onClick={prevPhoto} left>‹</NavigationButton>
                    <ModalImage src={currentPhotos[currentIndex]} alt={`${currentText} - ${currentIndex + 1}`} />
                    <NavigationButton onClick={nextPhoto} right>›</NavigationButton>
                    <p>{currentText}</p>
                </ModalContent>
            </Modal>
        </Container>
    );
}

export default SessionSix;