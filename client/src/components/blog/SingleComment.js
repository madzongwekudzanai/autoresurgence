import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteComment } from "../../actions/post";

const SingleComment = ({
  postId,
  auth,
  comment: { avatar, name, date, text, user, _id },
  deleteComment
}) => {
  return (
    <div className="comment-box">
      <div className="comment">
        <div className="author-thumb">
          <img src={avatar} alt="" />
        </div>
        <div className="comment-inner">
          <div className="comment-info">
            <h4 className="name">{name}</h4>
            <span className="date">
              <Moment format="MMMM DD, YYYY">{date}</Moment>
            </span>
            {auth.user && (
              <Fragment>
                {!auth.loading && user === auth.user._id && (
                  <span
                    onClick={e => {
                      deleteComment(postId, _id);
                    }}
                    className="fa fa-trash"
                  ></span>
                )}
              </Fragment>
            )}
          </div>
          <div className="text">{text}</div>
        </div>
      </div>
    </div>
  );
};

SingleComment.propTypes = {
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(SingleComment);
