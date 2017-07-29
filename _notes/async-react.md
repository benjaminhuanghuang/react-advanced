## The async function
  this.asyncFunc = ()=>{
      return Promise.resolve(99);
    };
  }

  
  async componentDidMount(){
    this.setState({
      answer: await this.asyncFunc()
    });
  }

## No need in new version of Node.js
1. yarn add babel-polyfill

2. add ['babel-polyfile'] into the entry of webpack.config.js
