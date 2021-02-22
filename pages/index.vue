<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      nuxt-app
      <div v-if="games.length">{{ games }}</div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { ALL_POSTS } from "~/graphql/queries/posts";

@Component({
  name: 'Home',
  components: {

  },
  async asyncData (ctx: any): Promise<Object> {
    const client = ctx.app.apolloProvider.defaultClient
    const { data } = await client.query({
      query: ALL_POSTS
    })
    return {
      games: data.posts
    }
  }
})
export default class Index extends Vue {

}
</script>
