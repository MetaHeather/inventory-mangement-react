import React, {Component} from 'react';
import MyComponent from './MyComponent'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: 'App Title'
    }

    //uses constructor for proper binding of this
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({title: 'New App Title'})
  }

  render() {
    const list = [
      'Item 1',
      'Item 2',
      'Item 3'
    ];
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div onClick={this.onClick}>Click Here!</div>
        <MyComponent />
      </div>
    );  
  }
}

export default App;
