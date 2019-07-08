import PropTypes from 'prop-types';
import React from 'react';

const ArticleItem = ({ article }) => {
  console.log(article);
  return (
    <div
      className="article-item"
      key={ article.collection.key }
    >
      <h3>{ article.collection.title }</h3>
      <p>{ article.collection.description }</p>
      <img src={ article.collection.image_url }></img>
      <a
        href={ article.collection.share_url }
        target="_blank"
      >Visit Article</a>
    </div>
  );
}

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
