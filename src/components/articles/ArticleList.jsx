import React from 'react';

import ArticleItem from 'Components/articles/ArticleItem';

const ArticleList = ({ articles }) => (
  articles.map((article) => (
    <ArticleItem
      key={ article.collection_id }
      article={ article }
    />
  ))
);

export default ArticleList;
