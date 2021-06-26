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
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../services";
import jwt_decode from "jwt-decode";
import { IDataSub } from "./dtos";

const Header = () => {
  const history = useHistory();

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const stringToken = localStorage.getItem("token") || "";

    const { sub } = jwt_decode<IDataSub>(stringToken);

    api
      .post("/user/verify", { id: sub })
      .then((response) => {
        setIsAdmin(response.data.verify);
        console.log("UseEF", response);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleForgot = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <Container>
      <DivContainer>
        <Logo>Mind Education</Logo>
        {isAdmin && (
          <FieldSearch>
            <DivIcon>
              <FiSearch color="#AAAAAA" size={20} />
            </DivIcon>
            <Search placeholder="Search..."></Search>
          </FieldSearch>
        )}
      </DivContainer>
      <DivMobile>
        <MenuMobile />
      </DivMobile>
      <Logout onClick={handleForgot}>Logout</Logout>
    </Container>
  );
};

export { Header };
