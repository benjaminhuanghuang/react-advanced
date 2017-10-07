import React from 'react';
import axios from 'axios';

import DataApi from '../DataApi';
import ArticleList from './ArticleList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: this.props.initialData.articles,
      authors: this.props.initialData.authors
    };

    //
    this.articleActions = {
      lookupAuthor: authorId=>this.state.authors[authorId]
    };
  }

  async componentDidMount()
  {
    const response = await axios.get('/data');
    const api = new DataApi(response.data);

    this.setState(()=>{
      return {
        articles: api.getArticles(),
        authors: api.getAuthors()
      };
    }); 
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