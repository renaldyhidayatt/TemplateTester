import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function Profile() {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{user.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {user.accessToken.substring(0, 20)} ... {user.accessToken.substr(user.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {user.id}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <strong>Authorities:</strong>
      <ul>{user.roles && user.roles.map((role, index) => <li key={index}>{role}</li>)}</ul>
    </div>
  );
}

export default Profile;
