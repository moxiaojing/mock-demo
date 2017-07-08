<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <seller></seller>
    <goods></goods>
    <ratings></ratings>
  </div>
</template>

<script>
import goods from './components/goods'
import ratings from './components/ratings'
import seller from './components/seller'

export default {
  name: 'app',
  components: {
    goods,
    ratings,
    seller
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10px auto;
  width:500px;

}
</style>
