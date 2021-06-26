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

const WelcomeUser = () => {
  return (
    <Container>
      <DivContent>
        <DivText>
          <Title>
            Bem vindo, <Span>nome</Span>
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
