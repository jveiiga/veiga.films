import logo from "../../../assets/images/logo.png"
import { BackGroundImage, Logo, SparkleEffect, Text } from "./index.styles"

function SessionOne() {
    return (
        <BackGroundImage>
            <Logo>
                <img src={logo} alt="Descrição da imagem" />
            </Logo>
            <SparkleEffect>
                <Text>
                    <p>Captando experiências que refletem a essência ©</p>
                </Text>
            </SparkleEffect>
        </BackGroundImage>
    )
}

export default SessionOne;
