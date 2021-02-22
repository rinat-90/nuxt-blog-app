<template>
  <v-row>
    <v-col
      v-for="post in posts"
      :key="post.id"
      cols="12" md="4">
      <PostCard :post="post" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import PostCard from '~/components/PostCard.vue'
@Component({
  name: "PostList",
  components: { PostCard }
})
export default class PostList extends Vue {
  @Prop({ type: Array}) posts!: object []
}
</script>

<style scoped>

</style>
