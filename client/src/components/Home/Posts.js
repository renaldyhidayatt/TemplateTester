import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ tutorials }) => {
  return (
    <div>
      {tutorials &&
        tutorials.map((tutorials, index) => (
          <div className="post-preview" key={index}>
            <Link to={"/posts/" + tutorials.id}>
              <h2 className="post-title">{tutorials.title}</h2>
              <h3 className="post-subtitle">{tutorials.id}</h3>
            </Link>
            <p className="post-meta">
              Posted by
              <a href="#">Start Bootstrap</a>
              on August 24, 2019
            </p>
          </div>
        ))}
    </div>
  );
};

export default Posts;
