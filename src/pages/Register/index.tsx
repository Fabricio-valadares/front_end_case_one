import { Container, ContainerForm, Text, Span, TextFieldStyled, Button, DivContent, Title, DivFiled, DivForm } from "./style"
import { useHistory } from "react-router-dom"
import { Background } from "../../components/Backgound"

const Register = () => {
    const history = useHistory()

    return (
        <Container>
           <Background />
            <ContainerForm>
                <DivForm>
                    <DivContent>
                        <Title>CADASTRO</Title>
                        <DivFiled>
                            <TextFieldStyled id="standard-basic" label="Name" />
                            <TextFieldStyled id="standard-basic" label="E-mail" />
                            <TextFieldStyled id="standard-basic" label="Senha" type="password"/>
                            <TextFieldStyled id="standard-basic" label="Confirmação Senha" type="password"/>
                            <Button type="submit">CADASTRAR</Button>
                        </DivFiled>
                        <Text>Já possui uma conta? <Span onClick={() => history.push("/")}>Entrar</Span></Text>
                    </DivContent>
                </DivForm>
            </ContainerForm>
        </Container>
    )
}

export { Register }