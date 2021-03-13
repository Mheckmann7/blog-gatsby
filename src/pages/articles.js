import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

const Articles = ({data}) => {
    const articles = data.allMarkdownRemark.edges.map(({ node }) => //edges is an array of node objects
        <article key={node.id}>
            <Link to={node.fields.slug}>
                <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>Published: {node.frontmatter.date}</p>
            <p>Time to Read: {node.timeToRead} mins</p>
            <p>{node.excerpt}</p>
        </article>
    );

    return (
        <div>
            <h1>Latest Articles</h1>
         {articles}
        </div>
    );
};

export const query = graphql`
query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MM DD, YYYY")
          }
          timeToRead
          excerpt
          fields {
            slug
          }
          id
        }
      }
    }
  }
`;

export default Articles;