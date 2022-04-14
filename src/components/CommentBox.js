import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from './../actions';
import { saveComment } from './../actions/index';

class CommentBox extends Component {
  state = { comment: "" };

  handleChange = event => {
    this.setState({comment: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    // TODO - Call an action creator
    // save comment
    this.props.saveComment(this.state.comment);
    this.setState({comment: ''});

  }

  render() {
    return (
        <div>
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Submit button</button>
        </div>
      </form>
      <button onClick = {this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}

// mapStateToprops function
export default connect(null, actions)(CommentBox);
