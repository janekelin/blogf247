import { Link } from "gatsby";
import React from "react";

import BlogHeading from "../components/BlogHeading";
import BlogLead from "../components/BlogLead";

export default props => {
  const { post } = props;

  const className = "blog";
  const articleClassName = className + "__item";
  const headingContent = {
    title: post.content.title,
    created: post.meta.created,
    category: post.meta.category
  };
  const leadContent = {
    tagline: post.content.tagline,
    img: post.img
  };

  //TO-DO: Replace placeholders
  return (
    <article className={articleClassName}>
      <BlogHeading className={className} content={headingContent} />
      <p>10 min</p>
      <BlogLead className={className} content={leadContent} />
      <Link to="/"><span className="sr-only">Read more</span></Link>
    </article>
  );
};