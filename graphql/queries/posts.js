import gql from 'graphql-tag'

export const ALL_POSTS = gql`
  query MyQuery {
    posts {
      id
      imgUrl
      text
      title
    }
  }
`

export const SINGLE_POST = gql`
  query MyQuery($id: Int!) {
    posts_by_pk(id: $id){
      id
      imgUrl
      text
      title
    }
  }
`
