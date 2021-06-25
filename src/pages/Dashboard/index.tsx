import { Header } from "../../components/Header";
import { Aside } from "../../components/Aside";
import { ContentDashboard } from "../../components/ContentDashboard";
import { Container, Content } from "./style";

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Aside />
        <ContentDashboard />
      </Content>
    </Container>
  );
};

export { Dashboard };
