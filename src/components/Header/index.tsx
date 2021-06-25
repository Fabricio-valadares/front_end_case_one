import {
  Container,
  FieldSearch,
  DivIcon,
  DivContainer,
  Logo,
  Search,
  Logout,
} from "./style";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <Container>
      <DivContainer>
        <Logo>Mind Education</Logo>
        <FieldSearch>
          <DivIcon>
            <FiSearch color="#AAAAAA" size={20} />
          </DivIcon>
          <Search placeholder="Search..."></Search>
        </FieldSearch>
      </DivContainer>
      <Logout>Logout</Logout>
    </Container>
  );
};

export { Header };
