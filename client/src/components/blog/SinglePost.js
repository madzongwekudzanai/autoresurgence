import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Moment from "react-moment";

const SinglePost = ({
  post: { blogImage, title, text, likes, comments, date, _id }
}) => {
  const imgSrc = `/blog/${blogImage}`;
  return (
    <div className="news-block-two">
      <div className="inner-box">
        <div className="image-box">
          <figure>
            <img src={imgSrc} alt="" />
          </figure>
          <a href={imgSrc} className="lightbox-image">
            <i className="plus-icon"></i>
          </a>
        </div>
        <div className="lower-content">
          <div className="info-box">
            <ul>
              <li>
                <i className="fa fa-user"></i>
                <Link to={`/blog/${_id}`}>Admin</Link>
              </li>
              <li>
                <i className="fa fa-comments"></i>
                <Link to={`/blog/${_id}`}>
                  Comments{" "}
                  {comments.length < 1 ? (
                    <span>0</span>
                  ) : (
                    <span>{comments.length}</span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
          <div className="content">
            <div className="date-and-like">
              <div className="date">
                <h4>
                  <Moment format="DD">{date}</Moment>
                </h4>
                <span className="text-lowercase">
                  <Moment format="MMM">{date}</Moment>
                </span>
              </div>
              <div className="like">
                <span className="fa fa-heart"></span> {likes.length}
              </div>
            </div>
            <h3>
              <Link to={`/blog/${_id}`}>{title}</Link>
            </h3>
            <p>{text}</p>
            <Link to={`/blog/${_id}`} className="read-more">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SinglePost.propTypes = {
  post: PropTypes.object.isRequired
};

export default SinglePost;
