<template>
  <div class="goods">
    <h2>展示goods类别名称</h2>
    <ul>
      <li v-show="goods" v-for="(item,index) in goods" :key="index">
        <h3 class="title">{{item.name}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'goods',
  data () {
    return {
      goods: [],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.$http.get('http://test.cn').then(

      (successData) => {
        console.log(successData.body)
        this.goods = successData.body.goods
      },

      (fileData) => {
        console.log(fileData)
      }

    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.title {
  font-size : 9px;
  color: blue;
}
</style>
