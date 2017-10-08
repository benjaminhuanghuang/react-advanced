import React from 'react';
import PropTypes from 'prop-types';

import ArticleList from './ArticleList';

class App extends React.Component { 
  static childContextTypes = {
    store: PropTypes.object 
  }
  // The context object
  getChildContext()
  {
    return {
      store: this.props.store
    };
  }
  // need stage-2
  state = this.props.store.getState();

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        store={this.props.store}
      />
    );
  }
}
export default App;
