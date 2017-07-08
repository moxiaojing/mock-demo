<template>
  <div class="seller">
    <h2>展示seller的公告</h2>
    <h3 class="title">{{seller.name}}</h3>
    <p>{{seller.bulletin}}</p>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ratings',
  data () {
    return {
      seller: []
    }
  },
  created () {
    this.$http.get('http://test.cn').then(

      (successData) => {
        console.log(successData.body)
        this.seller = successData.body.seller
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
