import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { IDataRoute } from "./dtos";
import { TokenAuthContext } from "../Provider/TokenAuth";

const PublicRoute = ({
  component: Component,
  isRestricted,
  ...rest
}: IDataRoute) => {
  const { auth } = useContext(TokenAuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        auth === isRestricted ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export { PublicRoute };
