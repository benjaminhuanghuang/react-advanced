import React from 'react';
import ReactDOM from 'react-dom';

// webpack resolve lib folder
import App from 'components/App';

const initialData = {
  articles:{},
  authors:{}
};

ReactDOM.render( <App initialData={ initialData }/>, document.getElementById('app') );