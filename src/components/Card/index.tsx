import { useState } from "react";
import { RiToolsFill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FormUpdate } from "../FormUpdate";
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

const Card = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <Container>
      <DivMobile>
        <ModalFront open={open} handleClose={handleClose}>
          <FormUpdate setOpen={setOpen} />
        </ModalFront>
        <ModalFront open={openDelete} handleClose={handleCloseDelete}>
          <h2>Opáveio</h2>
        </ModalFront>
        <TableStyled>
          <HeaderTable>
            <Title>#</Title>
            <Title>Name</Title>
            <Title>E-mail</Title>
            <Title>Data de cadastro</Title>
          </HeaderTable>
          <LineTable>
            <DataLine>01</DataLine>
            <DataLine>Bitcoin</DataLine>
            <DataLine>example@example.com</DataLine>
            <DataLine>23/06/2021</DataLine>
            <DataLine>
              <RiToolsFill
                style={{ cursor: "pointer" }}
                color="#837cf4"
                size={28}
                onClick={handleOpen}
              />
            </DataLine>
            <DataLine>
              <AiOutlineCloseCircle
                style={{ cursor: "pointer" }}
                color="#837cf4"
                size={28}
                onClick={handleOpenDelete}
              />
            </DataLine>
          </LineTable>
        </TableStyled>
      </DivMobile>
    </Container>
  );
};

export { Card };
