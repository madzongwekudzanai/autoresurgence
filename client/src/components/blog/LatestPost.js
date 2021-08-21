import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LatestPost = ({ post: { _id, title, comments, blogImage } }) => {
  return (
    <article className="post">
      <div className="post-thumb">
        <Link to={`/blog/${_id}`}>
          <img height="100%" src={`/blog/${blogImage}`} alt="" />
        </Link>
      </div>
      <h3>
        <Link to={`/blog/${_id}`}>{title}</Link>
      </h3>
      <div className="post-info">
        <span className="fa fa-comments"></span> {comments.length} Comments
      </div>
    </article>
  );
};

LatestPost.propTypes = {
  post: PropTypes.object.isRequired
};

export default LatestPost;
