import { InMemoryCache } from 'apollo-cache-inmemory'
export default function (context) {
  return {
    httpLinkOptions: {
      uri: process.env.API_URL,
      credentials: 'same-origin',
      headers: {
        'x-hasura-admin-secret': process.env.X_HASURA_ADMIN_SECRET
      }
    },
    cache: new InMemoryCache()
    // wsEndpoint: `ws://${process.env.API_URL}`,
  }
}
