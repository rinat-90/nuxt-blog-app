declare module '*.gql' {
  import { DocumentNode } from 'graphql'
  export const content: DocumentNode
}
