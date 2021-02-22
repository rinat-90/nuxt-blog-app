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

export const GET_GAME_BY_ID = gql`
  query MyQuery($id: Int!) {
    games_by_pk(id: $id){
      id
      title
      description
      type
      timeStart
      timeEnd
      spots
      skillLevel
      location
      imgUrl
      date
    }
  }
`
