import { Route, Redirect } from "react-router-dom";
import { IDataRoute } from "./dtos";

const PrivateRoute = ({
  component: Component,
  isRestricted,
  ...rest
}: IDataRoute) => {
  const token = localStorage.getItem("token") || "";

  return (
    <Route
      {...rest}
      render={(props) =>
        !!token === isRestricted ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export { PrivateRoute };
