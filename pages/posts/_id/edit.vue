<template>
  <v-row>
    <h1>Edit post {{ post.id }}</h1>
    <v-col>
      {{ post }}
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'EditGroup',
  components: {
  }
})
export default class EditGroup extends Vue {
  @Prop({ type: Object }) post! : Object
}
</script>

<style scoped>

</style>
