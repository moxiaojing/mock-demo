<template>
  <div class="ratings">
    <h2>展示ratings的text内容</h2>
    <ul>
      <li v-show="ratings" v-for="(item,index) in ratings" :key="index">
        <h3 class="title">{{item.text}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ratings',
  data () {
    return {
      ratings: []
    }
  },
  created () {
    this.$http.get('http://test.cn').then(

      (successData) => {
        console.log(successData.body)
        this.ratings = successData.body.ratings
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
