import {
  Container,
  DivSession,
  Session,
  DivIcon,
  Text,
  Title,
  DivTitle,
} from "./style";
import { MdDashboard, MdEmail, MdShoppingCart } from "react-icons/md";

const Aside = () => {
  return (
    <Container>
      <DivTitle>
        <Title>NAVEGAÇÃO</Title>
      </DivTitle>
      <DivSession>
        <Session>
          <DivIcon>
            <MdDashboard size={20} />
          </DivIcon>
          <Text>Dashboard</Text>
        </Session>
        <Session>
          <DivIcon>
            <MdEmail size={24} />
          </DivIcon>
          <Text>Função 2</Text>
        </Session>
        <Session>
          <DivIcon>
            <MdShoppingCart size={24} />
          </DivIcon>
          <Text>Funçao 3</Text>
        </Session>
      </DivSession>
    </Container>
  );
};

export { Aside };
