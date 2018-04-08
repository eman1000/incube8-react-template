import React, { Component } from "react";
import {Route, Switch} from "react-router";
import routes from "./routes";

console.log("routes",routes);
class App extends Component {

  render() {   
    return (
      <Switch>
        {
          routes.map((route, index) => (
            <Route key={index} {...route}/>
          ))
        }
      </Switch>
    );
  }
}

export default App;
