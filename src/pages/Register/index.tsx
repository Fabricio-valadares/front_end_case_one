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
import { useHistory } from "react-router-dom";
import { Background } from "../../components/Backgound";
import { IDataForm } from "./dtos";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/";

const Register = () => {
  const history = useHistory();

  const fieldRequired = "Campo Obrigatporio";

  const schema = yup.object().shape({
    name: yup.string().required(fieldRequired),
    email: yup.string().email("E-mail invalido").required(fieldRequired),
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
      name: data.name,
      email: data.email,
      password: data.password,
    };

    api
      .post("/register", dataFinal)
      .then((response) => {
        history.push("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Background />
      <ContainerForm>
        <DivForm>
          <DivContent>
            <Title>CADASTRO</Title>
            <DivFiled onSubmit={handleSubmit(dataSubmit)}>
              <TextFieldStyled
                {...register("name")}
                id="standard-basic"
                label="Name"
              />
              <p>{errors.name?.message}</p>
              <TextFieldStyled
                {...register("email")}
                id="standard-basic"
                label="E-mail"
              />
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
              <Button type="submit">CADASTRAR</Button>
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

export { Register };
