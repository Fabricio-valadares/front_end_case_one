import { Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ForgotPassword } from "../pages/ForgotPassword";
import { Dashboard } from "../pages/Dashboard";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { ResetPasswordRoute } from "./ResetPassword";
import { ResetPassword } from "../pages/ResetPassword";

const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact isRestricted={false} path="/" component={Login} />
      <PublicRoute
        exact
        isRestricted={false}
        path="/register"
        component={Register}
      />
      <PublicRoute
        exact
        isRestricted={false}
        path="/forgot"
        component={ForgotPassword}
      />
      <PrivateRoute
        exact
        isRestricted={true}
        path="/dashboard"
        component={Dashboard}
      />
      <ResetPasswordRoute exact path="/reset/" component={ResetPassword} />
    </Switch>
  );
};

export { Routes };
