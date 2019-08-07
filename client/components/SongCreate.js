import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <h4>Create Your Song!</h4>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title</label>
          <input
            onChange={e => this.setState({ title: e.target.value })}
            name="title"
            value={this.state.title}
            placeholder="add your title"
          />
        </form>
      </div>
    );
  }
}

const mutation = title => gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
