import { Container, ContainerForm, Text, Span, TextFieldStyled, SubTitle, Button, DivContent, Title, DivFiled, DivImage, DivForm } from "./style"
import { useHistory } from "react-router-dom"

const Login = () => {

    const history = useHistory()

    return (
        <Container>
            <DivImage />
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
                    </DivContent>
                </DivForm>
            </ContainerForm>
        </Container>
    )
}

export { Login }
