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
import { api } from "../../services/";

const Login = () => {
  const history = useHistory();
  const { setStringToken } = useContext(TokenAuthContext);

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

    api
      .post("/login", data)
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data.token));

        setStringToken(response.data.token);
        history.push("/dashboard");
      })
      .catch((error) => console.log(error));
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
              <p>{errors.email?.message}</p>
              <TextFieldStyled
                {...register("password")}
                id="standard-basic"
                label="Senha"
                type="password"
              />
              <p>{errors.password?.message}</p>
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
