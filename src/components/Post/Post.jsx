import React from "react";
import Comment from "../Comment/Comment";
import PostTags from "./PostTags";
import PostShare from "./PostShare";
import PostDate from "./PostDate";
import PostDivider from "./PostDivider";
import PostCategories from "./PostCategories";
import GoogleAdvertise from "../Adsense/Adsense";
import "./Post.scss";
import "../../../content/styles/code-highlight.scss";

const Post = ({ postNode, config, slug }) => {
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }
  if (!post.category_id) {
    post.category_id = config.postDefaultCategoryID;
  }

  return (
    <div className="post-container">
      <div className="meta-share-wrapper padding-top padding-bottom">
        <PostDate extraClass="meta-wrapper" date={post.date} /> 
        <PostShare extraClass="share-wrapper" postPath={slug} postNode={postNode} />
      </div>
      <PostDivider />
      <div className="padding-top padding-bottom">
        <small>
          <PostCategories categories={post.categories} extraClass="block" iconColor="#555" />
          <PostTags tags={post.tags} extraClass="block padding-top-half" iconColor="#555" />
        </small>
      </div>
      <PostDivider />
      <GoogleAdvertise
        client="ca-pub-2038621379918916"
        slot="7085564120"
        format="fluid"
        responsive="true"
        layoutKey="-fz+6a+19-cg+hh"
      />
      <div 
        className="padding-top padding-bottom" 
        dangerouslySetInnerHTML={{ __html: postNode.html }} 
      />
      <GoogleAdvertise
        client="ca-pub-2038621379918916"
        slot="7085564120"
        format="fluid"
        responsive="true"
        layoutKey="-fz+6a+19-cg+hh"
      />
      <PostDivider />
      <Comment 
        postNode={postNode} 
        extraClass="padding-top" 
        lazyload={config.lazyLoadComments} 
        btnLoadComments={config.btnLoadComments}
      />
    </div>
  )
}

export default Post;