import React, { useEffect, useRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
import { useSelector } from "react-redux";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import Index from "pages/";
import Profile from "pages/admin/Profile";
import Icons from "pages/admin/Icons";
import Tables from "pages/admin/Tables";

import routes from "routes.js";

function Admin(props) {
  const { user: currentUser } = useSelector((state) => state.auth);

  const mainContent = useRef(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });

  // const getRoutes = (routes) => {
  //   return routes.map((prop, key) => {
  //     if (prop.layout === "/admin") {
  //       return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
  //     } else {
  //       return null;
  //     }
  //   });
  // };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (props.location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("assets/img/brand/argon-react.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar {...props} brandText={getBrandText(props.location.pathname)} />
        <Switch>
          <Route path="/admin/icons" component={Icons} />
          <Route path="/admin/tables" component={Tables} />
          <Route path="/admin/user-profile" component={Profile} />
          <Route path="/admin/" component={Index} />
          <Redirect from="*" to="/admin/" />
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
}

export default Admin;
