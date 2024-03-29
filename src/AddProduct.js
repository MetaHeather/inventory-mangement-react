import React, {Component} from 'react';

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  // Methods //

  onSubmit(event) {
    //prevents the page from refreshing
    event.preventDefault();
    this.props.onAdd(this.nameInput.value, this.priceInput.value);
    this.nameInput.value = '';
    this.priceInput.value = '';
  }

  // Render // 

  render() {
      return(
        <form onSubmit={this.onSubmit}>
            <h3>Add Product</h3>
            <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} />
            <input placeholder="Price" ref={priceInput => this.priceInput = priceInput} />
            <button>Add</button>
            <hr />
        </form>
      );      
  }
}

export default AddProduct;
