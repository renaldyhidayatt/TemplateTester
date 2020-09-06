import React, { useState, useEffect } from "react";
import { usersServices } from "../../services";

function Moderator() {
  const [content, setContent] = useState("");

  useEffect(() => {
    usersServices.getModeratorBoard().then(
      (res) => {
        setContent(res.data);
      },
      (error) => {
        const _content = (error.res && error.res.data) || error.message || error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
        <p>Moderator</p>
      </header>
    </div>
  );
}

export default Moderator;