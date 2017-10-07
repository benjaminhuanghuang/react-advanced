import React from 'react';
import axios from 'axios';

import DataApi from 'state-api';
import ArticleList from './ArticleList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // for server side, initialData comes from serverRender
      articles: this.props.initialData.articles,
      authors: this.props.initialData.authors
    };

    //
    this.articleActions = {
      lookupAuthor: authorId=>this.state.authors[authorId]
    };
  }
  
  render() {
    return (
      <ArticleList
        articles={this.state.articles} 
        articleActions={this.articleActions}      
      />
    );
  }
}
export default App;