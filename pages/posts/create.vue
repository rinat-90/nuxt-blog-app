<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="8" lg="10">
      <div class="display-1 text-center mb-5">Create new post</div>
      <CreatePostForm />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import CreatePostForm from "~/components/CreatePostForm.vue";
@Component({
  name: "create",
  components: { CreatePostForm }
})
export default class Create extends Vue {

}
</script>

<style scoped>

</style>
