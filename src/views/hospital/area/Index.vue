<template>
  <div class="container">
    <list v-if="viewType === 'list'" @changeView="changeView" />
    <add v-else @changeView="changeView" />
  </div>
</template>

<script>
import List from './List'
import Add from './Add'
export default {
  name: 'Area',
  components: { List, Add },
  data() {
    return {
      viewType: 'list'
    }
  },
  methods: {
    changeView(type) {
      this.viewType = type
    }
  }

}
</script>

<style>

</style>
