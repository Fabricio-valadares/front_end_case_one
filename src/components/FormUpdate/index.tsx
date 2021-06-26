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

interface IData {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormUpdate = ({ setOpen }: IData) => {
  return (
    <ContainerForm>
      <DivForm>
        <DivContent>
          <Title>EDITAR</Title>
          <DivFiled>
            <TextFieldStyled id="standard-basic" label="Name" />
            <TextFieldStyled id="standard-basic" label="E-mail" />
            <TextFieldStyled
              id="standard-basic"
              label="Senha"
              type="password"
            />
            <TextFieldStyled
              id="standard-basic"
              label="Confirmação Senha"
              type="password"
            />
            <Button type="submit">CONFIRMAR</Button>
          </DivFiled>
          <Text onClick={() => setOpen(false)}>Voltar</Text>
        </DivContent>
      </DivForm>
    </ContainerForm>
  );
};

export { FormUpdate };
