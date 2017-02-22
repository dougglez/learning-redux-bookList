import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {

  renderList() {
    return this.props.books.map(book => {
      return (
        <li 
        key={book.title} 
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}</li>
      );
    });
  } //close renderList

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    ) //close return
  } //close render
} //close Component

const mapStateToProps = (state) => {
  //whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  }
}

// Anythign returned from this fxn will end up as props on the BookList container
const mapDispatchToProps = (dispatch) => {
  // whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promote BookList form a component to a container
// It needs to know about this new dispatch method.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)