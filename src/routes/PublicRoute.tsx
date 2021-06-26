import { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { IDataRoutePublic } from "./dtos"

const PublicRoute = ({component: Component, isRestricted, ...rest}: IDataRoutePublic) => {
    const { isAuth } = useContext()
    
    return (
        <Route {..rest} render={() => {

        }}/>
    )
}

export { PublicRoute }