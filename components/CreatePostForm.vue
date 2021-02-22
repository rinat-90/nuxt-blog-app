<template>
  <v-form v-model="valid" ref="form">
    <v-text-field
      v-model="title"
      :rules="notEmptyRules"
      label="Title"
      type="text"
      append-icon="mdi-format-text"
      filled />
    <v-text-field
      v-model="imgUrl"
      :rules="notEmptyRules"
      label="Img Url"
      type="text"
      append-icon="mdi-format-text"
      filled />
    <v-textarea
      v-model="text"
      :rules="notEmptyRules"
      label="Text"
      append-icon="mdi-format-text"
      filled />
    <v-btn color="green" class="white--text" :disabled="!valid" @click="createPost">Create</v-btn>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { INSERT_POST } from "~/graphql/mutations/posts";

@Component({ name: "CreatePostForm" })
export default class CreatePostForm extends Vue {

  $apolloProvider: any

  title: string = 'test title'
  imgUrl: string = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iObO5Xook5Z3ea1ND3DB0AHaC9%26pid%3DApi&f=1'
  text: string = 'some text'
  cat: string = 'test'
  valid: boolean = false

  notEmptyRules: Function [] = [
    (v:string) => !!v || 'Title is required',
  ]

  async createPost (): Promise<void> {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      const client = this.$apolloProvider.defaultClient
      const variables = {
        post: {
          title: this.title,
          imgUrl: this.imgUrl,
          text: this.text,
          cat: this.cat
        }
      }

      const { data } = await client.mutate({
        mutation: INSERT_POST,
        variables
      })
      await this.$router.push(`/posts/${data.insert_posts_one.id}`)
      console.log(data)
    }
  }
}
</script>

<style scoped>

</style>
