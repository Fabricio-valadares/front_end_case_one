import { Switch, Route } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { ForgotPassword } from "../pages/ForgotPassword"
import { Dashboard } from "../pages/Dashboard"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/forgot" component={ForgotPassword}/>
            <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
    )
}

export { Routes }
