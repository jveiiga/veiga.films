import { ContainerFooter, ContainerIcons, SocialMedia, Text, TextFollow, TextReserved } from "./index.styles";
import instagram from "../../assets/images/icons/instagram.svg";
import linkedin from "../../assets/images/icons/linkedin.svg";
import youtube from "../../assets/images/icons/youtube.svg";


function Footer() {
    return (
        <ContainerFooter>
            <Text>
                Sinta a essência ©
            </Text>
            <SocialMedia>
                <TextFollow>
                    Siga-nos nas redes sociais
                </TextFollow>
                <ContainerIcons>
                    <a href="https://www.instagram.com/veiga.films/" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="logo instagram" style={{ width: "34px", heigth: "34px" }} />
                    </a>
                    <a href="www" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="logo linkedin" style={{ width: "35px", heigth: "35px" }} />
                    </a>
                    <a href="https://www.youtube.com/@Veigafilms." target="_blank" rel="noopener noreferrer">
                        <img src={youtube} alt="logo youtube" style={{ width: "35px", heigth: "35px" }} />
                    </a>
                </ContainerIcons>
                <TextReserved>
                    Veiga Films 2025 - Todos os direitos reservados
                </TextReserved>
            </SocialMedia>
        </ContainerFooter>
    )
}

export default Footer;