import { Container, Header, Content, Text } from "./style";
import { Card } from "../../components/Card";
import { WelcomeUser } from "../../components/WelcomeUser";
import { api } from "../../services";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { IDataSub } from "./dtos";
import { useState } from "react";

const ContentDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const stringToken = localStorage.getItem("token") || "";

    const { sub } = jwt_decode<IDataSub>(stringToken);

    console.log("sim ", sub);
    api
      .post("/user/verify", { id: sub })
      .then((response) => {
        setIsAdmin(response.data.verify);
        console.log("UseEF", response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Header>{isAdmin && <Text>Cadastros</Text>}</Header>
      <Content>{isAdmin ? <Card /> : <WelcomeUser />}</Content>
    </Container>
  );
};

export { ContentDashboard };
