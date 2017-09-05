<template>
  <div id="app">
    <input type="text" v-model="data" />
    <graph :data="data" v-model="output" />
    <textarea type="text" v-model="output" />
  </div>
</template>

<script>

import Graph from './components/Graph'

export default {
  name: 'app',
  data () {
    return {
      data: 'Foo Bar Baz Test Dot',
      output: ''
    }
  },
  components: {
    Graph
  }
}
</script>

<style>
html {
  box-sizing: border-box;
}
*, ::before, ::after {
  box-sizing: inherit;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input {
  width: 100%;
  padding: 5px;
  font-size: 20px;
}
textarea {
  width: 100%;
  padding: 5px;
  font-size: 12px;
  height: 300px;
}
</style>
