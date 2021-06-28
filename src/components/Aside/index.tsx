import {
  Container,
  DivSession,
  Session,
  DivIcon,
  Text,
  Title,
  DivTitle,
  MdDashboardStyled,
  DivText,
} from "./style";
import { MdEmail, MdShoppingCart } from "react-icons/md";
import { api } from "../../services";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { IDataSub } from "./dtos";
import { useState } from "react";
import ModalFront from "../Modal";
import { FormUpdate } from "../FormUpdate";
import { useContext } from "react";
import { ChangeContext } from "../../Provider/ChangeName";

const Aside = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const { dataUserContext, setDataUserContext } = useContext(ChangeContext);

  const stringToken = localStorage.getItem("token") || "";

  const token = stringToken
    .split("")
    .filter((word) => word !== '"')
    .join("");

  const { sub } = jwt_decode<IDataSub>(stringToken);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    api
      .post("/user/verify", { id: sub })
      .then((response) => {
        setIsAdmin(response.data.verify);
      })
      .catch((error) => console.log(error));

    api
      .get("/user/listone", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setDataUserContext(response.data.user);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <ModalFront open={open} handleClose={handleClose}>
        <FormUpdate
          user_id={sub}
          setOpen={setOpen}
          nameUser={setDataUserContext}
        />
      </ModalFront>
      <DivTitle>
        {isAdmin ? (
          <Title>NAVEGAÇÃO</Title>
        ) : (
          <DivText>{dataUserContext.email}</DivText>
        )}
      </DivTitle>
      {isAdmin ? (
        <DivSession>
          <Session>
            <DivIcon>
              <MdDashboardStyled size={20} color="#6A707E" />
            </DivIcon>
            <Text>Dashboard</Text>
          </Session>
          <Session>
            <DivIcon>
              <MdEmail size={24} color="#6A707E" />
            </DivIcon>
            <Text>Função 2</Text>
          </Session>
          <Session>
            <DivIcon>
              <MdShoppingCart size={24} color="#6A707E" />
            </DivIcon>
            <Text>Funçao 3</Text>
          </Session>
        </DivSession>
      ) : (
        <DivSession>
          <Session onClick={handleOpen}>
            <DivIcon>
              <MdDashboardStyled size={24} color="#6A707E" />
            </DivIcon>
            <Text>Editar Perfil</Text>
          </Session>
        </DivSession>
      )}
    </Container>
  );
};

export { Aside };
