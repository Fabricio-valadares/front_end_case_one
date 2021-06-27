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
import { IData } from "./dtos";
import { api } from "../../services";

const ConfirmationDeleteUser = ({ setOpenDelete, userId, listUser }: IData) => {
  const stringToken = localStorage.getItem("token") || "";

  const token = stringToken
    .split("")
    .filter((word) => word !== '"')
    .join("");

  const deleteUserFinal = () => {
    api
      .delete(`/user/delete/${userId}`, {
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
          <DivImagem>
            <Imagem src="./assets/imgDelete.svg" />
          </DivImagem>
          <DivButton>
            <DivText>
              <Text>Você realmente deseja excluir o usuário?</Text>
            </DivText>
            <DivBTN>
              <ButtonOne onClick={deleteUserFinal}>CONFIRMAR</ButtonOne>
              <ButtonTwo onClick={() => setOpenDelete(false)}>NÃO</ButtonTwo>
            </DivBTN>
          </DivButton>
        </DivContent>
      </DivForm>
    </ContainerForm>
  );
};

export { ConfirmationDeleteUser };
