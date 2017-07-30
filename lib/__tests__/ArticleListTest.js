import React from 'react';
import renderer from 'react-test-renderer';

import ArticleList from '../components/ArticleList';

describe('ArticleList', () => {
  const testProps = {
    articles:{
      a:{id:'a'},
      b:{id:'b'}
    },
    articleActions: {
      lookupAuthor: jest.fn(()=>({}))
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <ArticleList {...testProps}/>  
    ).toJSON();

    //console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});