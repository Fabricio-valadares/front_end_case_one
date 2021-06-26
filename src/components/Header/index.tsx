import {
  Container,
  FieldSearch,
  DivIcon,
  DivContainer,
  Logo,
  Search,
  Logout,
  DivMobile,
} from "./style";
import { FiSearch } from "react-icons/fi";
import MenuMobile from "../MenuMobile";

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
      <DivMobile>
        <MenuMobile />
      </DivMobile>
      <Logout>Logout</Logout>
    </Container>
  );
};

export { Header };
