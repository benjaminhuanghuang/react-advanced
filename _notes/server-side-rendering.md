## Disable JavaScript at client side
  Chrome -> Settings -> Show advanced settings -> "Privacy" section ->
  Content settings -> "Javascript" section

  Chrome -> Developer Tools -> Settings -> Preferences -> Debugger -> Disable JavaScript 

## Template
<div id="app"><%- initialContent -%></div>
Warning: render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.


## serverRender to insert rendering content to view
```
import React from 'react';
import ReactDOMServer from 'react-dom/server';
// NODE_PATH=./lib 
import App from 'components/App';

const serverRender = () => {  
  return  ReactDOMServer.renderToString(<App/>);
};

export default  serverRender;
```

//-- Server.js
```
app.get('/', async (req, res) => {
  const initialContent = await serverRender();
  res.render('index', { initialContent });
});
```

## Performance test
  Chrome->Network->Disable cache
  Chrome->Performance-> CPU: 20*slowdown
  
