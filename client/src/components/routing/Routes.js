import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import PageTitle from "../layout/PageTitle";
import About from "../about/About";
import Blog from "../blog/Blog";
import BlogDetail from "../blog/BlogDetail";
import Service from "../service/Service";
import Contact from "../contact/Contact";
import NotFound from "../layout/NotFound";
import Success from "../layout/Success";

const Routes = () => {
  return (
    <Fragment>
      <PageTitle />
      <Switch>
        <Route exact component={About} path="/about" />
        <Route exact component={Service} path="/service" />
        <Route exact component={Contact} path="/contact" />
        <Route exact component={Blog} path="/blog" />
        <Route exact component={BlogDetail} path="/blog/:id" />
        <Route exact component={Success} path="/auth/:token" />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
