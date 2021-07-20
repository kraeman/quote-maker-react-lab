import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    content: '',
    author: '',
    votes: 0
  }

  handleOnContentChange = event => {
    this.setState({
      content: event.target.value
    });
  }

  handleOnAuthorChange = event => {
    this.setState({
      author: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault()
    let quote = {...this.state, id: uuid()}
    this.props.addQuote(quote)
    this.setState({
      content: '',
      author: '',
      votes: 0
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={(event) => this.handleOnSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        name='content'
                        onChange={(event) => this.handleOnContentChange(event)}
                        className="form-control"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                      name='author'
                        onChange={(event) => this.handleOnAuthorChange(event)}
                        className="form-control"
                        type="text"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return { quotes: state.quotes }
}

const mapDispatchToProps = dispatch => {
  return {
    addQuote: (q) => {
      dispatch(addQuote(q))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);

