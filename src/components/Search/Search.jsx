import React, { useState } from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import config from '../../../data/SiteConfig';
import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = (props) => {
    const emptyQuery = "";

    const [state, setState ] = useState({
        filteredData : [],
        query : emptyQuery
    })


    const handleInputChange = (event) => {
        const query = event.target.value;
        const {data} = props;
        const posts = data.allMarkdownRemark.edges || [];

        const filteredData = posts.filter((post) => {
            const { description, title, tags } = post.node.frontmatter;

            return (
                (description &&
                    description.toLowerCase().includes(query.toLowerCase())
                ) ||
                (title && title.toLowerCase().includes(query.toLowerCase())) ||
                (tags && tags.join("").toLowerCase().includes(query))
            )
        })

        setState({
            query,
            filteredData,
        })
    };

    const renderSearchResult = () => {
        const { query, filteredData } = state;
        const hasSearchResults = filteredData && query !== emptyQuery;
        const posts = hasSearchResults ? filteredData : [];
        
        return (
            posts &&
            posts.map(({ node }) => {
                const { excerpt } = node;

                const { slug } = node.fields;
                const { title, date, summary } = node.frontmatter;

                return (
                    <div key = {slug} className="search-article">
                        <article key = {slug}>
                            <header>
                                <h2 className = "search-title">
                                    <Link to={slug}> {title} </Link>
                                </h2>
                            </header>
                            <section>
                                <p className="search-description"
                                dangerouslySetInnerHTML={{
                                    __html : summary || excerpt,
                                }}
                                />
                                <p className = "search-date">
                                    <em> {date} </em>
                                </p>
                            </section>
                        </article>
                    </div>
                )
            })
        )
    }



    return (
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
                    onChange={handleInputChange}
                />
            </div>
            {state.query && (
            <div className="search-result-container">
               {renderSearchResult()}
            </div>
        )}
        </div>
    );

};
// StaticQuery export
export default (props) => (
    <StaticQuery
      query={graphql`
        query {
            allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                  node {
                    frontmatter {
                      categories
                      date(formatString: "MMMM DD, YYYY")
                      description
                      keywords
                      summary
                      tags
                      title
                    }
                    fields {
                      slug
                    }
                  }
                }
              }
        }
      `}
      render={(data) => <Search data={data} {...props} />}
    />
  );