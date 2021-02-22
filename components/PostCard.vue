<template>
  <v-card :to="`/posts/${post.id}`">
    <v-img :src="post.imgUrl"></v-img>
    <v-card-title>{{ post.title }}</v-card-title>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({
  name: "Post"
})
export default class PostCard extends Vue {
  @Prop({ type: Object}) post!: Object
}
</script>

<style scoped>

</style>
