<template>
  <div>
    <nuxt-child :post="post" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import {SINGLE_POST} from "~/graphql/queries/posts";

@Component({
  name: 'Post',
  async asyncData (ctx: any): Promise<Object> {
    const client = ctx.app.apolloProvider.defaultClient
    const { data } = await client.query({
      query: SINGLE_POST,
      variables: {
        id: ctx.route.params.id
      }
    })
    return {
      post: data.posts_by_pk
    }
  }
})
export default class Post extends Vue {

}
</script>

<style scoped>

</style>
