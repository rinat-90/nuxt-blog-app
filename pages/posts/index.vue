<template>
  <v-row>
    <PostList :posts="posts" />
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { ALL_POSTS } from "~/graphql/queries/posts";
import PostList from "~/components/PostList.vue";

@Component({
  name: 'Posts',
  components: { PostList },
  async asyncData (ctx: any): Promise<Object> {
    const client = ctx.app.apolloProvider.defaultClient
    const { data } = await client.query({
      query: ALL_POSTS
    })
    return {
      posts: data.posts
    }
  }
})
export default class Groups extends Vue {

}
</script>

<style scoped>

</style>
