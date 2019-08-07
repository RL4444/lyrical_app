import React, { Component } from "react";
import { graphql } from "react-apollo";

import fetchSong from "../queries/fetchSong";

class SongDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("props", this.props);
    return (
      <div>
        <h3>Song Detail Component</h3>{" "}
      </div>
    );
  }
}

// export default graphql(fetchSong)(SongDetail);

export default graphql(fetchSong, {
  options: props => {
    return {
      variables: {
        id: props.params.id
      }
    };
  }
})(SongDetail);
