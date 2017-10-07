import React from 'react';
import ReactDOM from 'react-dom';

// webpack resolve lib folder
import App from 'components/App';
//
ReactDOM.render( <App initialData={ window.initialData }/>, document.getElementById('app') );