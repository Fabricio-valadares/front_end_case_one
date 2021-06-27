import { useState, useEffect, useContext } from "react";
import { RiToolsFill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FormUpdate } from "../FormUpdate";
import { ConfirmationDeleteUser } from "../ConfirmationDeleteUser";
import ModalFront from "../Modal";
import {
  Container,
  TableStyled,
  HeaderTable,
  Title,
  LineTable,
  DataLine,
  DivMobile,
} from "./style";
import { api } from "../../services";
import { IDataUser } from "./dtos";
import { TextInputContext } from "../../Provider/TextInput";

const Card = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const { textInput } = useContext(TextInputContext);

  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [dataUser, setDataUser] = useState<IDataUser[]>([]);
  const stringToken = localStorage.getItem("token") || "";

  const token = stringToken
    .split("")
    .filter((word) => word !== '"')
    .join("");

  const handleOpen = (user: string) => {
    setOpen(true);
    setUserId(user);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenDelete = (user: string) => {
    setOpenDelete(true);
    setUserId(user);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const listUser = () => {
    api
      .get("/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setDataUser(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    listUser();
  }, []);

  return (
    <Container>
      <DivMobile>
        <ModalFront open={open} handleClose={handleClose}>
          <FormUpdate setOpen={setOpen} user_id={userId} listUser={listUser} />
        </ModalFront>
        <ModalFront open={openDelete} handleClose={handleCloseDelete}>
          <ConfirmationDeleteUser
            setOpenDelete={setOpenDelete}
            userId={userId}
            listUser={listUser}
          />
        </ModalFront>
        <TableStyled>
          <HeaderTable>
            <Title>#</Title>
            <Title>Name</Title>
            <Title>E-mail</Title>
            <Title>Data de cadastro</Title>
          </HeaderTable>
          {dataUser
            .filter((user) =>
              user.name?.toLowerCase().includes(textInput.toLowerCase())
            )
            .sort((a, b) => a.id.length - b.id.length)
            .map((element, index) => (
              <LineTable>
                <DataLine>{index + 1}</DataLine>
                <DataLine>{element.name}</DataLine>
                <DataLine>{element.email}</DataLine>
                <DataLine>23/06/2021</DataLine>
                <DataLine>
                  <RiToolsFill
                    style={{ cursor: "pointer" }}
                    color="#837cf4"
                    size={28}
                    onClick={() => handleOpen(element.id)}
                  />
                </DataLine>
                <DataLine>
                  <AiOutlineCloseCircle
                    style={{ cursor: "pointer" }}
                    color="#837cf4"
                    size={28}
                    onClick={() => handleOpenDelete(element.id)}
                  />
                </DataLine>
              </LineTable>
            ))}
        </TableStyled>
      </DivMobile>
    </Container>
  );
};

export { Card };
