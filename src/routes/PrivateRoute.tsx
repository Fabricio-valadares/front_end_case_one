import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { IDataRoute } from "./dtos";
import { TokenAuthContext } from "../Provider/TokenAuth";

const PrivateRoute = ({
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

export { PrivateRoute };
