import React from 'react';

import ArticleList from 'Components/articles/ArticleList';
import Navigation from 'Components/navigation';

import collections from '../api/collections.json';

const flattenedCollections = () => [...(collections.collections).map(collection => collection.collection)];

const App = () => {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>
        <h1>Find Top Foodie Stories in Your City</h1>
        <ArticleList articles={ flattenedCollections() } />
      </main>
    </>
  );
}

export default App;
