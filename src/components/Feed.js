import React from "react";

import BlogPost from "../components/BlogPost";

export default props => {
  const { posts } = props;

  const className = "blog";
  const sectionClassName = className + "__section";
  const latestPosts = posts.map(item => <BlogPost key={item.id} className={className} post={item} />);

  return (
    <section className={sectionClassName} >
      {latestPosts}
    </section>
  );
};