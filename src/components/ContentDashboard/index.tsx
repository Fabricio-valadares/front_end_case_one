import { Container, Header, Content, Text } from "./style";
import { Card } from "../../components/Card";

const ContentDashboard = () => {
  return (
    <Container>
      <Header>
        <Text>Cadastros</Text>
      </Header>
      <Content>
        <Card />
      </Content>
    </Container>
  );
};

export { ContentDashboard };
