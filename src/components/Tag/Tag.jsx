import React from "react";
import AutoLink from "../AutoLink/AutoLink";
import { getTagPath } from "../../utils/helpers";
import "./Tag.scss";

const Tag = ({ content }) => (
  <AutoLink 
    key={content} 
    to={getTagPath(content)}
    className="inline-block margin-right-half margin-bottom-half 
      border border-color-light-grey padding-left-half padding-right-half tags"
  >
    <span class="content">{content}</span>
  </AutoLink>
)

export default Tag;