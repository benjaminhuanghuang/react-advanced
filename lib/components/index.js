import React from 'react';
import ReactDOM from 'react-dom';

//const App = () => (<h2>Hello React!</h2>);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: 42
    };
  }


  render(){
    return (
      <h2>Hello React! {this.state.answer}</h2>
    );
  }
}

ReactDOM.render( <App/>, document.getElementById('app') );