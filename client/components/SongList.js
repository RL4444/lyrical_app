import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import fetchSongsQuery from "../queries/fetchSongs";
import deleteMutation from "../mutations/deleteSong";

class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testVal: "I am the SongList component"
    };
    this.renderSongs = this.renderSongs.bind(this);
  }
  deleteSong(id) {
    this.props
      .mutate({
        variables: { id }
      })
      .then(() => {
        this.props.data.refetch();
      });
  }
  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <div key={id}>
          <li className="collection-item">
            {title}
            <i className="material-icons" onClick={() => this.deleteSong(id)}>
              delete
            </i>
          </li>
        </div>
      );
    });
  }

  render() {
    if (!this.props.data.loading) {
      return (
        <div>
          {this.state.testVal}
          <ul className="collection">{this.renderSongs()}</ul>
          <Link to="/songs/new" className="btn-floating btn-large red right">
            <i className="material-icons">add</i>
          </Link>
        </div>
      );
    } else {
      return <div>loading</div>;
    }
  }
}

export default graphql(deleteMutation)(graphql(fetchSongsQuery)(SongList));
