import { Container, ContainerForm, Text, TextForgot, Span, TextFieldStyled, SubTitle, Button, DivContent, Title, DivFiled, DivForm } from "./style"
import { useHistory } from "react-router-dom"
import { Background } from "../../components/Backgound"

const Login = () => {

    const history = useHistory()

    return (
        <Container>
           <Background />
            <ContainerForm>
                <DivForm>
                    <DivContent>
                        <Title>ENTRAR</Title>
                        <SubTitle>O seu passaporte para o futuro.</SubTitle>
                        <DivFiled>
                            <TextFieldStyled id="standard-basic" label="Name" />
                            <TextFieldStyled id="standard-basic" label="Senha" type="password"/>
                            <Button type="submit">LOGIN</Button>
                        </DivFiled>
                        <Text>Não possui uma conta? <Span onClick={() => history.push("/register")}>Registrar-se</Span></Text>
                        <TextForgot onClick={() => history.push("/forgot")}>Esqueceu a senha?</TextForgot>
                    </DivContent>
                </DivForm>
            </ContainerForm>
        </Container>
    )
}

export { Login }
