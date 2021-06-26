import { Route, Redirect } from "react-router-dom";
import { IDataRoute } from "./dtos";

const PublicRoute = ({
  component: Component,
  isRestricted,
  ...rest
}: IDataRoute) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isRestricted ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export { PublicRoute };
