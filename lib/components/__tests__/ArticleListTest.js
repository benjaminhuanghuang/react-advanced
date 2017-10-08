import React from 'react';
//import renderer from 'react-test-renderer';   // to create snapshot
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

import ArticleList from '../ArticleList';
import Article from '../Article';

describe('ArticleList', () => {
  const testProps = {
    articles:{
      a:{id:'a'},
      b:{id:'b'}
    }
  };
  Article.propTypes = {};

  it('renders correctly', () => {
    //renderer.create will create a ReactTestInstance object
    const wrapper = shallow(
      <ArticleList {...testProps}/>  
    );

    //console.log(tree);
    expect(wrapper.find('Article').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});