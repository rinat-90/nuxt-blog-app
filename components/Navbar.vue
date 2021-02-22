<template>
  <v-app-bar
    fixed
    app
  >

    <v-toolbar-title v-text="'Frontend dev'" />
    <v-spacer />
    <v-toolbar-items>
      <v-btn text to="/posts">posts</v-btn>
      <v-btn text>Sign In</v-btn>
      <v-btn text>Sign out</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  name: "Navbar"
})
export default class Navbar extends Vue {

}
</script>

<style scoped>

</style>
