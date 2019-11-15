import React, { Component } from 'react';
import './App.css';



class ProductItem extends Component {
  // Constructor //

  constructor(props){
    super(props);

    this.state = {
      //this state will let us know if we are in edit mode or view mode
      isEdit: false
    }

    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  // Methods //

  onEdit() {
    this.setState({ isEdit: true });
  }

  onEditSubmit(event) {
    event.preventDefault();
    this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name);
    this.setState({ isEdit: false });
  }

  onDelete() {
    const {onDelete, name} = this.props;
    onDelete(name);
  }

  // Render //

  render() {
    const {name, price} = this.props;

    return (
        <div>
            {/* if isEdit is true, render the edit version  */}
            {
              this.state.isEdit ?
              (
                <form onSubmit={this.onEditSubmit}>
                  <input 
                    placeholder="Name" 
                    ref={nameInput => this.nameInput = nameInput}
                    defaultValue={name}
                  />
                  <input 
                    placeholder="Price" 
                    ref={priceInput => this.priceInput = priceInput} 
                    defaultValue={price}
                  />
                  <button>Save</button>
                </form>
              ) :
              (
                <>
                <span>{name}</span>
                {` | `}
                <span>{price}</span>
                {` | `}
                <button onClick={this.onEdit}>Edit</button>
                {` | `}
                <button onClick={this.onDelete}>Delete</button>
                </>
              )
            }

        </div>
    )
  }
}

export default ProductItem;
