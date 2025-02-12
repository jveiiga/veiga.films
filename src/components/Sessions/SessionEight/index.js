import { Button, ButtonWrapper, Container, ContainerForm, FormGroup, Input, Label, Text, Textarea } from "./index.styles";

function SessionEight() {
    return (
        <Container id="form-section">
            <Text>Fale com a gente</Text>
            <ContainerForm
                action="https://formsubmit.co/7aea09bf210ffe2891b141e48213e3ab" method="POST"
            >
                <FormGroup>
                    <Input type="text" id="name" name="name" placeholder="Seu Nome" required />
                </FormGroup>
                <FormGroup>
                    <Input type="email" id="email" name="email" placeholder="Email" required />
                </FormGroup>
                <FormGroup>
                    <Input type="tel" id="phone" name="phone" placeholder="DDD+Telefone"required />
                </FormGroup>
                <FormGroup>
                    <Input type="text" id="company" name="company" placeholder="É Empresa?" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="message"></Label>
                    <Textarea id="message" name="message" placeholder="Nos conte sobre o que você precisa:" required />
                </FormGroup>
                <ButtonWrapper>
                    <Button type="submit">Enviar</Button>
                </ButtonWrapper>
            </ContainerForm>
        </Container>
    );
}

export default SessionEight;