<template>
  <div id="app">
    <h1 v-html="title"></h1>
    <input v-model="newItem" placeholder="输入你要做的事情" @keyup.enter="addNew">
    <ol>
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}"
      v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ol>
  </div>
</template>

<script>
  import Store from './store'
export default {
  data: function () {
    return {
      title: 'This is a todo list',
      items: Store.fetch(),
      newItem: ''
    }
  },
  watch:{
    items:{
      handler:function (items) {
        Store.save(items)
      },
      deep:true
    }
  },
  methods: {
    toggleFinish: function (item) {
      item.isFinished = !item.isFinished
    },
    addNew: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      }),
      this.newItem = ''
    }
  }
}
</script>

<style scoped>
  .finished{
    text-decoration: underline;
  }
</style>
