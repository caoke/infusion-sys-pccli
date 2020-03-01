<template>
  <div class="container">
    <list v-if="!showAdd" @changeView="changeView" />
    <add v-else @changeView="changeView" />
  </div>
</template>

<script>
import List from './List'
import Add from './Add'
export default {
  name: 'Department',
  components: {
    List,
    Add
  },
  data() {
    return {
      showAdd: false
    }
  },
  methods: {
    changeView(flag) {
      this.showAdd = flag
    }
  }

}
</script>

<style>

</style>
