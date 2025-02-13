import logo from "../../../assets/images/logo.png"
import { BackGroundImage, Logo, SparkleEffect } from "./index.styles"

function SessionOne() {
    return (
        <BackGroundImage>
            <SparkleEffect>
            <Logo>
                <img src={logo} alt="Descrição da imagem" />
            </Logo>
                {/* <Text>
                    <p>Captando experiências que refletem a essência ©</p>
                </Text> */}
            </SparkleEffect>
        </BackGroundImage>
    )
}

export default SessionOne;
