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
  FiCodeStyled,
} from "./style";
import { useHistory } from "react-router-dom";
import { Background } from "../../components/Backgound";
import { IDataForgot } from "./dtos";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

const ForgotPassword = () => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);

  const [viewIcon, setViewIcon] = useState(false);

  const fieldRequired = "Campo Obrigatório";

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Não e um formato de e-mail")
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

  const dataSubmit = (data: IDataForgot) => {
    setViewIcon(true);
    reset();
    api
      .post("/user/forgot", data)
      .then((response) => {
        setValid(true);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  useEffect(() => {
    setViewIcon(false);
    if (error) {
      toast.error(`😵 Error no pedido`, {
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
      toast.success(`Email enviado com sucesso !`, {
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
            <Title>ESQUECI MINHA SENHA</Title>
            <DivFiled onSubmit={handleSubmit(dataSubmit)}>
              <TextFieldStyled
                {...register("email")}
                id="standard-basic"
                label="Insira seu e-mail"
              />
              <p>{errors.email?.message}</p>
              <Button type="submit">
                {viewIcon ? (
                  <FiCodeStyled color="#fff" size={25} />
                ) : (
                  "ENVIAR CÓDIGO"
                )}
              </Button>
            </DivFiled>
            <Text>
              Não possui uma conta?{" "}
              <Span onClick={() => history.push("/register")}>
                Registrar-se
              </Span>
            </Text>
          </DivContent>
        </DivForm>
      </ContainerForm>
    </Container>
  );
};

export { ForgotPassword };
