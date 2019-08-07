import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testVal: "I am the SongList component"
    };
    this.renderSongs = this.renderSongs.bind(this);
  }

  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  }

  render() {
    if (!this.props.data.songs) {
      console.log("not loaded songs yet!");
    }
    if (!this.props.data.loading) {
      return (
        <div>
          {this.state.testVal}
          <ul className="collection">{this.renderSongs()}</ul>
        </div>
      );
    } else {
      return <div>loading</div>;
    }
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
