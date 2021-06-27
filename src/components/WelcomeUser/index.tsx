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
import { useEffect, useContext } from "react";
import { ChangeContext } from "../../Provider/ChangeName";

const WelcomeUser = () => {
  const { dataUserContext, setDataUserContext } = useContext(ChangeContext);

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
        setDataUserContext(response.data.user);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <DivContent>
        <DivText>
          <Title>
            Bem vindo, <Span>{dataUserContext.name}</Span>
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
