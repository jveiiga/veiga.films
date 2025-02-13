import logo from "../../../assets/images/logo.png"
import { BackGroundImage, Logo, SparkleEffect } from "./index.styles"

function Cover() {
    return (
        <BackGroundImage>
            <SparkleEffect>
            <Logo>
                <img src={logo} alt="Logo Veiga Films, letra V e letra F" />
            </Logo>
                {/* <Text>
                    <p>Captando experiências que refletem a essência ©</p>
                </Text> */}
            </SparkleEffect>
        </BackGroundImage>
    )
}

export default Cover;
