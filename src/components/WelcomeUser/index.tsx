import {
  Container,
  DivContent,
  DivText,
  DivImage,
  Footer,
  Text,
  Title,
  Image,
  Span,
} from "./style";
import { api } from "../../services";
import { useEffect } from "react";
import { IDataUser } from "./dtos";
import { useState } from "react";

const WelcomeUser = () => {
  const [dataUser, setDataUser] = useState<IDataUser>({} as IDataUser);

  const stringToken = localStorage.getItem("token") || "";

  const token = stringToken
    .split("")
    .filter((word) => word !== '"')
    .join("");

  useEffect(() => {
    api
      .get("/user/listone", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setDataUser(response.data.user);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <DivContent>
        <DivText>
          <Title>
            Bem vindo, <Span>{dataUser.name}</Span>
          </Title>
        </DivText>
        <DivImage>
          <Image src="./assets/welcome.svg"></Image>
        </DivImage>
      </DivContent>
      <Footer>
        <Text>Copyrights © Mind Education</Text>
      </Footer>
    </Container>
  );
};

export { WelcomeUser };
