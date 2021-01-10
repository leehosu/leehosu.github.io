import React, { Component } from "react";
import Article from "./Article";
//import Search from "../Search/Search";
import config from '../../../data/SiteConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PostListing.scss';

class PostListing extends Component {
  state = {
    maxPosts: this.props.hasLoadmore && this.props.postsPerPage
      ? this.props.postsPerPage
      : this.props.postList.length,
      filteredData : this.props.postList
  }

  handleLoadmore = () => {
    const { hasLoadmore = false, numberLoadmore } = this.props;

    if (!hasLoadmore) return;

    this.setState((prevState) => ({
      maxPosts: prevState.maxPosts + numberLoadmore
    }));
  }

  handleInputChange = (event) => {
    const query = event.target.value;
    const { postList } = this.props;

    const filteredData = postList.filter((post) => {
        const { title, category, tags } = post;

        return(
          (title && title.toLowerCase().includes(query.toLowerCase())) ||
          (tags && tags.join("").toLowerCase().includes(query)) ||
          (category && category.join("").toLowerCase().includes(query))
        )
    })
    
    this.setState((prevState => ({
      filteredData
    })))
  }

  
  render() {
    const { hasThumbnail = true, hasLoadmore = false } = this.props;
    const { filteredData } =  this.state
    const { maxPosts } = this.state;

    return (
      <>
        <div className="post-listing-container">
          {/* <Search /> */}
          <div className="container-full row padding-none margin-bottom-none search">
            <div className="search-input">
              <div className="search-icon">
                  <FontAwesomeIcon
                    icon={['fas', 'search']}
                    style={{ color: '#0ca678' }}
                  />
              </div>
              <input
                className="margin-bottom-none"
                type="text"
                name="q"
                placeholder={config.searchWidgetPlaceHolder}
                required
                spellCheck="false"
                onChange={this.handleInputChange}
              />
            </div>
          </div>


          {filteredData.map((post, index) => {
            if (index < maxPosts) return (
              <Article key={index} post={post} hasThumbnail={hasThumbnail} />
            )

            return null;
          })}
        </div>
        {hasLoadmore && maxPosts < filteredData.length && (
          <div 
            className="loadmore-wrapper margin-top padding-top-half text-center"
          >
            <button className="tags" onClick={this.handleLoadmore}>
              {this.props.btnLoadmore}
            </button>
          </div>
        )}
      </>
    )
  }
}

export default PostListing;
