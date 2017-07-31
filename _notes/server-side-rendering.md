## 
  Disable JavaScript at client side

## Insert rendering content to view
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from 'components/App';

const serverRender = () => {  
  return  ReactDOMServer.renderToString(<App/>);
};

export default  serverRender;

## Template
<div id="app"><%- initialContent -%></div>
Warning: render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.

## Performance test
  Chrome->Network->Disable cache
  Chrome->Performance-> CPU: 20*slowdown
  
