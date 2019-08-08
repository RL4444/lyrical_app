import React, { Component } from "react";
import { graphql } from "react-apollo";

import addLyric from "../mutations/addLyric";

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props
      .mutate({
        variables: {
          songId: this.props.songId,
          content: this.state.content
        }
      })
      .then(() => {
        this.setState({
          content: ""
        });
      });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Add a lyric</label>
          <input
            onChange={e => this.setState({ content: e.target.value })}
            value={this.state.content}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default graphql(addLyric)(LyricCreate);
