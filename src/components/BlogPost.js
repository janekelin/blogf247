import { Link } from "gatsby"
import React from "react"

import BlogHeading from "../components/BlogHeading"
import BlogLead from "../components/BlogLead"

export default props => {
  const { className, post } = props

  const articleClassName = className + "__item"
  const headingContent = {
    title: post.content.title,
    created: post.meta.created,
    category: post.meta.category,
  }
  const leadContent = {
    tagline: post.content.tagline,
    img: post.img,
  }

  //TO-DO: Replace placeholders
  return (
    <article className={articleClassName}>
      <BlogHeading className={className} content={headingContent} />
      <p className="blog__length">10 min</p>
      <BlogLead className={className} content={leadContent} />
      <Link className="blog__link" to="/">
        <img src={`/images/f24s_icon_arrow.svg`} alt="Decorative arrow symbolizing link to a full content" />
        <span className="sr-only">Read more</span>
      </Link>
    </article>
  )
}
