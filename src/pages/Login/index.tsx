import {
  Container,
  ContainerForm,
  Text,
  TextForgot,
  Span,
  TextFieldStyled,
  SubTitle,
  Button,
  DivContent,
  Title,
  DivFiled,
  DivForm,
} from "./style";
import { useHistory } from "react-router-dom";
import { Background } from "../../components/Backgound";
import { useContext } from "react";
import { TokenAuthContext } from "../../Provider/TokenAuth";
import { IDataForm } from "./dtos";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
  const history = useHistory();
  const { setAuth } = useContext(TokenAuthContext);

  const fieldRequired = "Campo Obrigatporio";

  const schema = yup.object().shape({
    email: yup.string().email().required(fieldRequired),
    password: yup.string().required(fieldRequired),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dataSubmit = (data: IDataForm) => {
    reset();
    console.log(data);
  };

  return (
    <Container>
      <Background />
      <ContainerForm>
        <DivForm>
          <DivContent>
            <Title>ENTRAR</Title>
            <SubTitle>O seu passaporte para o futuro.</SubTitle>
            <DivFiled onSubmit={handleSubmit(dataSubmit)}>
              <TextFieldStyled
                {...register("email")}
                id="standard-basic"
                label="Email"
              />
              <TextFieldStyled
                {...register("password")}
                id="standard-basic"
                label="Senha"
                type="password"
              />
              <Button type="submit">LOGIN</Button>
            </DivFiled>
            <Text>
              Não possui uma conta?{" "}
              <Span onClick={() => history.push("/register")}>
                Registrar-se
              </Span>
            </Text>
            <TextForgot onClick={() => history.push("/forgot")}>
              Esqueceu a senha?
            </TextForgot>
          </DivContent>
        </DivForm>
      </ContainerForm>
    </Container>
  );
};

export { Login };
