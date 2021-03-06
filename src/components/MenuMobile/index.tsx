import React, { useEffect, useState, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {
  MdDashboard,
  MdEmail,
  MdShoppingCart,
  MdDehaze,
  MdClose,
  MdAssignment,
} from "react-icons/md";
import { IDataSub } from "./dtos";
import { api } from "../../services";
import ModalFront from "../Modal";
import { FormUpdate } from "../FormUpdate";
import { ChangeContext } from "../../Provider/ChangeName";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "#837cf4",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const MenuMobile = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { setDataUserContext } = useContext(ChangeContext);

  const [isAdmin, setIsAdmin] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const history = useHistory();

  const stringToken = localStorage.getItem("token") || "";

  const { sub } = jwt_decode<IDataSub>(stringToken);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    api
      .post("/user/verify", { id: sub })
      .then((response) => {
        setIsAdmin(response.data.verify);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleForgot = () => {
    localStorage.clear();
    history.push("/");
  };

  const handleOpenModel = () => {
    setOpen(true);
    handleClose();
  };

  const handleCloseModel = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <MdDehaze size={30} />
      </Button>
      {isAdmin ? (
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem>
            <ListItemIcon>
              <MdDashboard size={25} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon>
              <MdEmail size={25} />
            </ListItemIcon>
            <ListItemText primary="Fun????o 2" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon>
              <MdShoppingCart size={25} />
            </ListItemIcon>
            <ListItemText primary="Fun??ao 3" />
          </StyledMenuItem>
          <StyledMenuItem onClick={handleForgot}>
            <ListItemIcon>
              <MdClose size={25} />
            </ListItemIcon>
            <ListItemText primary="Forgot" />
          </StyledMenuItem>
        </StyledMenu>
      ) : (
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <ModalFront open={open} handleClose={handleCloseModel}>
            <FormUpdate
              setOpen={setOpen}
              user_id={sub}
              nameUser={setDataUserContext}
            />
          </ModalFront>
          <StyledMenuItem onClick={handleOpenModel}>
            <ListItemIcon>
              <MdAssignment size={25} />
            </ListItemIcon>
            <ListItemText primary="Editar Perfil" />
          </StyledMenuItem>
          <StyledMenuItem onClick={handleForgot}>
            <ListItemIcon>
              <MdClose size={25} />
            </ListItemIcon>
            <ListItemText primary="Forgot" />
          </StyledMenuItem>
        </StyledMenu>
      )}
    </div>
  );
};

export default MenuMobile;
