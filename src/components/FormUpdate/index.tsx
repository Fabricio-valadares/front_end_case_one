import {
  ContainerForm,
  Text,
  TextFieldStyled,
  Button,
  DivContent,
  Title,
  DivFiled,
  DivForm,
} from "./style";
import { api } from "../../services";
import { IDataForm, IData } from "./dtos";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormUpdate = ({ setOpen, user_id, listUser }: IData) => {
  const stringToken = localStorage.getItem("token") || "";

  const token = stringToken
    .split("")
    .filter((word) => word !== '"')
    .join("");

  const schema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("E-mail invalido"),
    password: yup.string(),
    confirmationPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não compativel"),
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
      .put(`/user/update/${user_id}`, dataFinal, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        listUser();
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <ContainerForm>
      <DivForm>
        <DivContent>
          <Title>EDITAR</Title>
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
            <Button type="submit">CONFIRMAR</Button>
          </DivFiled>
          <Text onClick={() => setOpen(false)}>Voltar</Text>
        </DivContent>
      </DivForm>
    </ContainerForm>
  );
};

export { FormUpdate };
