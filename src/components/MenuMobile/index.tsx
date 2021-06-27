import React, { useEffect, useState } from "react";
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
} from "react-icons/md";
import { IDataSub } from "./dtos";
import { api } from "../../services";

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
  const [isAdmin, setIsAdmin] = useState(false);
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
            <ListItemText primary="Função 2" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon>
              <MdShoppingCart size={25} />
            </ListItemIcon>
            <ListItemText primary="Funçao 3" />
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
