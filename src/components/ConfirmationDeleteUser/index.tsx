import {
  ContainerForm,
  DivButton,
  DivImagem,
  Imagem,
  DivContent,
  DivForm,
  Text,
  DivBTN,
  ButtonOne,
  ButtonTwo,
  DivText,
} from "./style";

interface IData {
  setOpenDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmationDeleteUser = ({ setOpenDelete }: IData) => {
  return (
    <ContainerForm>
      <DivForm>
        <DivContent>
          <DivImagem>
            <Imagem src="./assets/imgDelete.svg" />
          </DivImagem>
          <DivButton>
            <DivText>
              <Text>Você realmente deseja excluir o usuário?</Text>
            </DivText>
            <DivBTN>
              <ButtonOne>CONFIRMAR</ButtonOne>
              <ButtonTwo>NÃO</ButtonTwo>
            </DivBTN>
          </DivButton>
        </DivContent>
      </DivForm>
    </ContainerForm>
  );
};

export { ConfirmationDeleteUser };
