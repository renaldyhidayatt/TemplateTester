import React, { useEffect, useState } from "react";
import Header from "components/Home/Header";
import { getPostsDetail } from "../../redux/action/posts.action";

import { connect } from "react-redux";

function Posts(props) {
  useEffect(() => {
    props.dispatch(getPostsDetail(props.match.params.id));
  });
  return (
    <div>
      <Header image={"https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-1.2.1&w=1000&q=80"} title={props.getPostsDetail.title} subtitle="Tester Blog" />
      <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <p>{props.getPostsDetail.title}</p>
              <p>{props.getPostsDetail.description}</p>
              <a href="#">
                <img className="img-fluid" src="https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-1.2.1&w=1000&q=80" alt="" />
              </a>
              <span className="caption text-muted">To go places and do things that have never been done before – that’s what living is all about.</span>
              <p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p>
              <p>As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore, and this is exploration at its greatest.</p>
              <p>
                Placeholder text by
                <a href="http://spaceipsum.com/">Space Ipsum</a>. Photographs by
                <a href="https://www.flickr.com/photos/nasacommons/">NASA on The Commons</a>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    getPostsDetail: state.posts.getPostsDetail,
    errorPostsDetail: state.posts.errorPostsDetail,
  };
};

export default connect(mapStateToProps, null)(Posts);
