<template>
  <v-row>
    <v-col v-if="post">
      <pre>
        {{ post }}
      </pre>
      <nuxt-link :to="`${$route.path}/edit`">Edit</nuxt-link>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'SingleGroup',
  components: {}
})
export default class SingleGroup extends Vue {
  @Prop({ type: Object }) post! : Object
}
</script>

<style scoped>

</style>
