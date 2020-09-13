import React from "react";

const Header = (props) => {
  return (
    <header className="masthead" style={{ backgroundImage: `url("${props.image}")` }}>
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>{props.title}</h1>
              <span className="subheading">{props.subtitle}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
