import { Route, Redirect } from "react-router-dom";
import { IDataRoute } from "./dtos";

const ResetPasswordRoute = ({ component: Component, ...rest }: IDataRoute) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        true ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export { ResetPasswordRoute };
