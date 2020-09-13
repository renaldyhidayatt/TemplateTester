import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Register from "./pages/Register";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/login" component={Register} /> */}
      </Switch>
    </div>
  );
}

export default App;
