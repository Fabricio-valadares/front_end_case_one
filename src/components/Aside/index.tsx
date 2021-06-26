import {
  Container,
  DivSession,
  Session,
  DivIcon,
  Text,
  Title,
  DivTitle,
  MdDashboardStyled,
} from "./style";
import { MdEmail, MdShoppingCart } from "react-icons/md";
import { api } from "../../services";
import { useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import { TokenAuthContext } from "../../Provider/TokenAuth";
import { IDataSub } from "./dtos";
import { useState } from "react";

const Aside = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const stringToken = localStorage.getItem("token") || "";

    const { sub } = jwt_decode<IDataSub>(stringToken);

    api
      .post("/user/verify", { id: sub })
      .then((response) => {
        setIsAdmin(response.data.verify);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <DivTitle>
        {isAdmin ? <Title>NAVEGAÇÃO</Title> : <div>example@email.com</div>}
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
          <Session>
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
