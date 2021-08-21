import React from "react";
import PropTypes from "prop-types";
import { Media, ListGroup } from "react-bootstrap";

const SinglePost = ({
  post: { _id, text, title, comments, likes, blogImage }
}) => {
  const imgSrc = `/blog/${blogImage}`;
  return (
    <ListGroup.Item>
      <Media>
        <img width={100} height={60} className="mr-3" src={imgSrc} />
        <Media.Body>
          <div className="admin-header">
            <h5 className="media-header trunk">{title}</h5>{" "}
            <span className="fa fa-trash"></span>
          </div>
          <p className="blog-text">{text}</p>
          <p className="admin-post-comm">
            <div>
              <span className="fa fa-comments"></span>
              {comments.length} Comments
            </div>
            <div>
              <span className="fa fa-thumbs-up"></span>
              {likes.length} Likes
            </div>
            <div>
              <span className="fa fa-thumbs-down"></span>0 Dislikes
            </div>
          </p>
        </Media.Body>
      </Media>
    </ListGroup.Item>
  );
};

SinglePost.propTypes = {
  post: PropTypes.object.isRequired
};

export default SinglePost;
