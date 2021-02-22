<template>
  <v-row>
    <nuxt-child />
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Posts',
})
export default class Posts extends Vue {

}
</script>

<style scoped>

</style>
