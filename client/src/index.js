import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.css";
import "assets/css/demo.css";

import indexRoutes from "routes/index.jsx";

const hist = createBrowserHistory();

window.axios = axios;
window.axios.interceptors.response.use(function (response) {
  console.log("interceptor response"); 
  console.log(response)
  return response;
}, function (error) {
  if (403 === error.response.status) {
    console.log("hit 401")
    window.location = '/login';
  } 
  else {

    return error; // Promise.reject(error);
  }
});

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
