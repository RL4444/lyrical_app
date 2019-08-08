import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

import fetchSong from "../queries/fetchSong";

class SongDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderProps() {
    if (!this.props.data.loading && this.props.data.song) {
      return {
        song: this.props.data.song.title,
        lyrics: this.props.data.song.lyrics
      };
    } else {
      return <div>Loading...</div>;
    }
  }

  render() {
    return (
      <div>
        <Link to="/">back</Link>
        <h3>{this.renderProps().song}</h3>
        <LyricList lyrics={this.renderProps().lyrics} />
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => {
    return {
      variables: {
        id: props.params.id
      }
    };
  }
})(SongDetail);
