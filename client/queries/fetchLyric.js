import gql from "graphql-tag";

export default gql`
  query($id: ID!) {
    lyric(id: $id) {
      content
      likes
    }
  }
`;
