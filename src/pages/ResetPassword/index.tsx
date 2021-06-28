import {
  Container,
  ContainerForm,
  Text,
  Span,
  TextFieldStyled,
  Button,
  DivContent,
  Title,
  DivFiled,
  DivForm,
} from "./style";
import { useHistory, useLocation } from "react-router-dom";
import { Background } from "../../components/Backgound";
import { IDataForm } from "./dtos";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const ResetPassword = () => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);

  const { search } = useLocation();

  const [, token] = search.split("=");

  if (!token) {
    history.push("/");
  }

  const fieldRequired = "Campo Obrigatório";

  const schema = yup.object().shape({
    password: yup.string().required(fieldRequired),
    confirmationPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não compativel")
      .required(fieldRequired),
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

    const dataFinal = {
      token: token,
      password: data.password,
    };

    api
      .post("/user/reset", dataFinal)
      .then((response) => {
        setValid(true);
        console.log("vaquinha");
        history.push("/");
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  useEffect(() => {
    if (error) {
      toast.error(`😵 Error ao atualizar senha`, {
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
      toast.success(`Senha atualizada com sucesso !`, {
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
            <Title>RESETAR SENHA</Title>
            <DivFiled onSubmit={handleSubmit(dataSubmit)}>
              <p>{errors.email?.message}</p>
              <TextFieldStyled
                {...register("password")}
                id="standard-basic"
                label="Senha"
                type="password"
              />
              <p>{errors.password?.message}</p>
              <TextFieldStyled
                {...register("confirmationPassword")}
                id="standard-basic"
                label="Confirmação Senha"
                type="password"
              />
              <p>{errors.confirmationPassword?.message}</p>
              <Button type="submit">COMFIRMAR</Button>
            </DivFiled>
            <Text>
              Já possui uma conta?{" "}
              <Span onClick={() => history.push("/")}>Entrar</Span>
            </Text>
          </DivContent>
        </DivForm>
      </ContainerForm>
    </Container>
  );
};

export { ResetPassword };
