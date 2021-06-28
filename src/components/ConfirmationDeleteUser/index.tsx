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
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const ConfirmationDeleteUser = ({ setOpenDelete, userId, listUser }: IData) => {
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);

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
        setValid(true);
        listUser();
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  useEffect(() => {
    if (error) {
      toast.error(`😵 Error na atualização`, {
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
      toast.success(`Deleção efetuado com sucesso !`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setOpenDelete(false);
      setValid(false);
    }
  }, [error, valid]);

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
