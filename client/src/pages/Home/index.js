import React from "react";
// import { usersServices } from "../../services";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import HomeNavbar from "components/Navbars/HomeNavbar";
import HomeFooter from "components/Footers/HomeFooter";
import Posts from "./Posts";

function HomeIndex() {
  return (
    <div>
      <HomeNavbar />
      <div>
        <Switch>
          <Route path="/posts/:id" component={Posts} />
          {/* <Route path="/add" component={AddPosts} />
          <Route path="/tutorials/:id" component={Post} /> */}
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      <HomeFooter />
    </div>
  );
}

export default HomeIndex;
