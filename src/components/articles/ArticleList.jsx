import React from 'react';

import ArticleItem from 'Components/articles/ArticleItem';

const ArticleList = ({ articles }) => (
  articles.collections.map((article) => (
    <ArticleItem
      key={ article.collection.key }
      article={ article }
    />
  ))
);

export default ArticleList;
