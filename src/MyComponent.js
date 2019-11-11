import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    title: PropTypes.any
}

const defaultProps = {
    name: 'Default Name' 
}

class MyComponent extends Component {
  
  componentWillMount() {
    console.log("Will Mount");
  }

  componentDidMount() {
    console.log("Did Mount")
  }

  render() {
      const {title, name, onClick} = this.props;
      return(
          <div className="component">
              <h1>Title: {title}</h1>
              <h2>Name: {name}</h2>
              <div onClick={onClick} >Click Me!</div>
          </div>
      );
  }  
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
