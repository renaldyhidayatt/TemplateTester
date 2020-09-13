import React from "react";
import { connect } from "react-redux";

const Tester = (props) => {
  return (
    <div>
      <div className="text-center">
        <h2 className="post-title">{props.getPostsDetail.title}</h2>
        <h3 className="post-subtitle">{props.getPostsDetail.description}</h3>
        <p className="post-meta">
          Posted by
          <a href="#">Start Bootstrap</a>
          on August 24, 2019
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getPostsDetail: state.posts.getPostsDetail,
    errorPostsDetail: state.posts.errorPostsDetail,
  };
};

export default connect(mapStateToProps, null)(Tester);
