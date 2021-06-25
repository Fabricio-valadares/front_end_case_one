import { Container, ContainerForm, Text, Span, TextFieldStyled, Button, DivContent, Title, DivFiled, DivForm } from "./style"
import { useHistory } from "react-router-dom"
import { Background } from "../../components/Backgound"

const ForgotPassword = () => {
    const history = useHistory()

    return (
        <Container>
           <Background />
            <ContainerForm>
                <DivForm>
                    <DivContent>
                        <Title>ESQUECI MINHA SENHA</Title>
                        <DivFiled>
                            <TextFieldStyled id="standard-basic" label="Insira seu e-mail" />
                            <Button type="submit">ENVIAR CÓDIGO</Button>
                        </DivFiled>
                        <Text>Não possui uma conta? <Span onClick={() => history.push("/")}>Registrar-se</Span></Text>
                    </DivContent>
                </DivForm>
            </ContainerForm>
        </Container>
    )
}

export { ForgotPassword }
