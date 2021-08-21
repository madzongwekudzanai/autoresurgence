import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPost, addComment } from "../../actions/post";
import Moment from "react-moment";
import Spinner from "../layout/Spinner";
import LatestPost from "./LatestPost";
import SingleComment from "./SingleComment";

const BlogDetail = ({
  post: { post, loading },
  getPost,
  match,
  threePosts,
  auth,
  addComment
}) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [match.params.id]);
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    addComment(match.params.id, { text });
    setText("");
  };
  return loading || post === null ? (
    <Spinner />
  ) : (
    <div className="sidebar-page-container">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="content-side col-lg-9 col-md-8 col-sm-12 mt-5">
            <div className="blog-list">
              <div className="news-block-two">
                <div className="inner-box">
                  <div className="image-box">
                    <figure>
                      <img src={`/blog/${post.blogImage}`} alt="" />
                    </figure>
                  </div>
                  <div className="lower-content">
                    <div className="info-box">
                      <ul>
                        <li>
                          <i className="fa fa-user"></i>
                          <Link to={`/blog/${post._id}`}>Admin</Link>
                        </li>
                        <li>
                          <i className="fa fa-comments"></i>
                          <Link to={`/blog/${post._id}`}>
                            Comments <span>{post.comments.length}</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="content">
                      <div className="date-and-like">
                        <div className="date">
                          <h4>
                            <Moment format="DD">{post.date}</Moment>
                          </h4>
                          <span className="text-lowercase">
                            <Moment format="MMM">{post.date}</Moment>
                          </span>
                        </div>
                        <div className="like">
                          <span className="fa fa-heart"></span>{" "}
                          {post.likes.length}
                        </div>
                      </div>
                      <h3>
                        <Link to={`/blog/${post._id}`}>{post.title}</Link>
                      </h3>
                      <p>{post.text}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comments-area">
                <div className="group-title">
                  <h2>{post.comments.length} Comments</h2>
                </div>
                {post.comments.map(comment => (
                  <SingleComment
                    key={comment._id}
                    comment={comment}
                    postId={post._id}
                  />
                ))}
              </div>
              {auth.isAuthenticated ? (
                <div className="comment-form">
                  <div className="group-title">
                    <h2>Leave Comment</h2>
                  </div>
                  <form
                    onSubmit={e => {
                      onSubmit(e);
                    }}
                  >
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="username"
                          readOnly="true"
                          value={auth.user.name}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="email"
                          name="email"
                          readOnly="true"
                          value={auth.user.email}
                        />
                      </div>
                      <div className="col-lg-12 col-md-6 col-sm-12 form-group">
                        <textarea
                          name="message"
                          placeholder="Your Comments"
                          value={text}
                          onChange={e => {
                            onChange(e);
                          }}
                        ></textarea>
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                        <button
                          className="theme-btn btn-style-three"
                          type="submit"
                          name="submit-form"
                        >
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              ) : null}
            </div>
          </div>
          <div className="sidebar-side col-lg-3 col-md-4 col-sm-12 mt-5">
            <aside className="sidebar default-sidebar">
              <div className="sidebar-widget latest-news">
                <div className="sidebar-title">
                  <h2>Latest News</h2>
                </div>
                <div className="widget-content">
                  {threePosts.map(post => (
                    <LatestPost key={post._id} post={post} />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogDetail.propTypes = {
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
  threePosts: PropTypes.array.isRequired,
  auth: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  threePosts: state.post.threePosts,
  auth: state.auth
});

export default connect(mapStateToProps, { getPost, addComment })(BlogDetail);
