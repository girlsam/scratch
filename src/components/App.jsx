import React, { Fragment } from 'react';

import ArticleList from 'Components/articles/ArticleList';
import Navigation from 'Components/navigation';

import collections from '../api/collections.json';

const App = () => (
  <Fragment>
    <nav>
      <Navigation />
    </nav>
    <main>
      <h1>Find Top Foodie Stories in Your City</h1>
      <ArticleList articles={ collections } />
    </main>
  </Fragment>
);

export default App;
