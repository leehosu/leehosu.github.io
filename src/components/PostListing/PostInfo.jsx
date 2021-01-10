import React from "react";
import AutoLink from "../AutoLink/AutoLink";
import PostListDate from "../Post/PostListDate";
import "./PostInfo.scss";

const PostInfo = ({ post, extraClass = "" }) => {

  const categories = post.categories;
  
  return (
    <div className={`post-info-wrapper ${extraClass}`}>
    <AutoLink to={post.slug}>
      <h2><small>{post.title}</small></h2>
    </AutoLink> 
    <div className="margin-bottom-half">{post.excerpt}</div>
    <div className="post-info-bottom" >
      <small><PostListDate date={post.date}/></small>
      <span className="separator">·</span>
      { categories && (
          categories.map((category, index) => (
            <small key={index}> {category} </small>
          ))
      )
    }
   </div> 
  </div>
  )
}

export default PostInfo;