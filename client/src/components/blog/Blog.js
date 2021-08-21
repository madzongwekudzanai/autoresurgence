import React, { useEffect } from "react";
import LatestPost from "./LatestPost";
import SinglePost from "./SinglePost";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import { connect } from "react-redux";
import { getPosts, getThreePost } from "../../actions/post";

const Blog = ({ posts, threePosts, loading, getPosts, getThreePost }) => {
  useEffect(() => {
    getPosts();
    getThreePost();
  }, [getPosts, getThreePost]);
  return loading ? (
    <Spinner />
  ) : (
    <div className="sidebar-page-container">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="content-side col-lg-9 col-md-8 col-sm-12 mt-5">
            <div className="blog-list">
              {posts.map(post => (
                <SinglePost key={post._id} post={post} />
              ))}
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

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  threePosts: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired,
  getThreePost: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  posts: state.post.posts,
  loading: state.post.loading,
  threePosts: state.post.threePosts
});

export default connect(mapStateToProps, { getPosts, getThreePost })(Blog);
