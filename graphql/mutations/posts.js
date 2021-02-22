import gql from 'graphql-tag'

export const INSERT_POST = gql`
  mutation MyMutation($post: posts_insert_input!) {
    insert_posts_one(object: $post) {
      cat
      id
      imgUrl
      text
      title
    }
  }
`

