import React, { Component } from "react";
import { graphql } from "react-apollo";

import addLike from "../mutations/addLike";

class LyricList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addLike(id, likes) {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          __typename: "LyricType",
          likes: likes + 1
        }
      }
    });
  }
  sortLikes(number) {
    if (number > 0) {
      return number;
    } else {
      return null;
    }
  }
  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <li className="collection-item" key={id}>
          {content}
          <div className="vote-box">
            <p>{this.sortLikes(likes)}</p>
            <i
              className="material-icons"
              onClick={() => this.addLike(id, likes)}
            >
              thumb_up
            </i>
          </div>
        </li>
      );
    });
  }
  render() {
    if (!this.props.lyrics) {
      return <div>loading...</div>;
    }
    return (
      <div className="collection">
        <ul>{this.renderLyrics()}</ul>
      </div>
    );
  }
}

export default graphql(addLike)(LyricList);
