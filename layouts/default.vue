<template>
  <v-app dark>
    <Navbar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      absolute
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import Navbar from '~/components/Navbar.vue'

@Component({
  name: 'Default',
  components: { Navbar }
})
export default class Default extends Vue {

}
</script>
