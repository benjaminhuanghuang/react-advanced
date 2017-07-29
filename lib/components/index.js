import React from 'react';
import ReactDOM from 'react-dom';

//const App = () => (<h2>Hello React!</h2>);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: 42
    };

    this.asyncFunc = ()=>{
      return Promise.resolve(99);
    };
  }

  
  async componentDidMount(){
    this.setState({
      answer: await this.asyncFunc()
    });
  }

  render(){
    return (
      <h2>Hello React! {this.state.answer}</h2>
    );
  }
}

ReactDOM.render( <App/>, document.getElementById('app') );