import React, { Suspense } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import AdminLayout from "pages/admin/";
import AuthLayout from "pages/auth/";
import Home from "pages/Home/";

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Route path="/" component={Home} />
      </Switch>
    </Suspense>
  );
}

export default App;
