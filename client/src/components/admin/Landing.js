import React, { Fragment, useEffect, useState } from "react";
import {
  Jumbotron,
  Breadcrumb,
  Row,
  Col,
  ListGroup,
  Badge,
  Button,
  Modal,
  Form
} from "react-bootstrap";
import PropTypes from "prop-types";
import axios from "axios";
import SinglePost from "./SinglePost";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import { Redirect } from "react-router-dom";
import Moment from "react-moment";

const Landing = ({ posts, getPosts, auth: { isAuthenticated } }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios.get("/api/users");
      setUsers(result.data);
    };
    fetchUsers();
    getPosts();
  }, [getPosts]);

  return (
    <Fragment>
      <Jumbotron className="jumbo">
        <Breadcrumb>
          <Breadcrumb.Item>YOU ARE HERE</Breadcrumb.Item>
          <Breadcrumb.Item
            style={{
              color: "#6c757d",
              fontWeight: "600"
            }}
          >
            Dashboard
          </Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="jumbo-header">Dashboard</h1>
        <Row>
          <Col lg={6} md={6}>
            <Jumbotron className="jumbo-posts">
              <h5 className="h5-header">
                <span className="fa fa-user"></span> Users{" "}
                <Badge variant="warning">{users.length}</Badge>
              </h5>
              <div className="table-responsive">
                <table class="table">
                  <thead class="thead-dark text-center">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Date Created</th>
                    </tr>
                  </thead>
                  <tbody className="text-lg-center">
                    {users.map(({ name, email, date, _id }) => (
                      <tr key={_id}>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>
                          <Moment format="DD MMM, YYYY">{date}</Moment>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p></p>
            </Jumbotron>
          </Col>
          <Col lg={6} md={6}>
            <Jumbotron className="jumbo-posts">
              <div className="post-header">
                <h5 className="h5-header">
                  Posts <Badge variant="success">{posts.length}</Badge>
                </h5>
                <span onClick={handleShow} className="fa fa-plus"></span>
                <Modal show={show} onHide={handleClose} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Post</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title" />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" placeholder="Image" />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="5"
                          placeholder="Description"
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                      Add
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>

              <ListGroup variant="flush">
                {posts.map(post => (
                  <SinglePost key={post._id} post={post} />
                ))}
              </ListGroup>
            </Jumbotron>
          </Col>
        </Row>
      </Jumbotron>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  posts: state.post.posts,
  loading: state.post.loading,
  auth: state.authAdmin
});

Landing.propTypes = {
  posts: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getPosts })(Landing);
