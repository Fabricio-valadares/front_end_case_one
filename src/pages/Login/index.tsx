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
import { useContext, useEffect, useState } from "react";
import { TokenAuthContext } from "../../Provider/TokenAuth";
import { IDataForm } from "./dtos";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/";
import { toast } from "react-toastify";

const Login = () => {
  const history = useHistory();
  const { setStringToken } = useContext(TokenAuthContext);
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);

  const fieldRequired = "Campo Obrigatório";

  const schema = yup.object().shape({
    emailOrCPF: yup.string().required(fieldRequired),
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

    api
      .post("/login", data)
      .then((response) => {
        localStorage.clear();

        localStorage.setItem("token", JSON.stringify(response.data.token));

        setValid(true);
        setStringToken(response.data.token);
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  useEffect(() => {
    if (error) {
      toast.error(`😵 Email/CPF Inválido `, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setError(false);
    }
    if (valid) {
      toast.dark(`🚀 Seja bem-vindo`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setValid(false);
    }
  }, [error, valid]);

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
                {...register("emailOrCPF")}
                id="standard-basic"
                label="Email/CPF"
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
