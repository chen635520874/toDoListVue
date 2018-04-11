<template>
  <div id="app">
    <h1 v-html="title"></h1>
  </div>
</template>

<script>
export default {
  name: 'to_do_list',
  data: function () {
    return {
      title: 'this is list_to'
    }
  }
}
</script>

<style scoped>

</style>
