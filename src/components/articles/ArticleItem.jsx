import PropTypes from 'prop-types';
import React from 'react';

const ArticleItem = ({ article }) => (
  <div className="article-item">
    <h3>{ article.title }</h3>
    <p>{ article.description }</p>
    <img src={ article.image_url }></img>
    <a
      href={ article.share_url }
      target="_blank"
    >Visit Article</a>
  </div>
);

ArticleItem.propTypes = {
  article: PropTypes.shape({
    key: PropTypes.string,
    description: PropTypes.description,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    link: PropTypes.string
  }).isRequired
};

export default ArticleItem;
