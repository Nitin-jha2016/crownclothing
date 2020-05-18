import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact Path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}
export default App;
