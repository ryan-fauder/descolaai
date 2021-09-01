
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

/*  Rotas do site */
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Perfil from "./pages/Perfil";
import Tool from "./pages/Tool";
import { isAuth } from "./services/auth";

// Verifica se o usuário está logado
function UserRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest}
      render={
        props => isAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

const browserRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/cadastro' component={Register} />
      <UserRoute path='/inicio' component={Home} />
      <UserRoute path='/perfil/:username' component={Perfil} />
      <UserRoute path='/ferramenta/:id' component={Tool} />
      <Route path="*" component={Error} />
    </Switch>
  </BrowserRouter>
);


export default browserRoutes;