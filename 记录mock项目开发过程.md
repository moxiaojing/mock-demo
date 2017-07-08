
# 项目说明
  本项目主要是测试在vue项目中使用mock数据
# 项目开发过程
  首先使用vue-cli搭建vue开发环境
    1、全局安装vue-cli: npm install -g vue-cli
    2、脚手架生成项目：vue init webpack 项目名（mock-demo）
    3、选择相关工具
    4、安装依赖：npm install
    5、安装mockjs：npm i mockjs --save-dev
  开发环境已经搭建完成，下一步开始编辑mock数据

#模拟mock数据

  1、在src中新建一个urls文件，主要存放数据文件，创建一个mock.js,在里面输入

```
  import Mock from 'mockjs'

  export default Mock.mock('http://test.cn', { // 简易版数据，定义数据的url地址

  'seller': {
    'name': '粥品香坊（回龙观）',
    'bulletin': '粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。'
    
  },
  'goods': [
    {
      'name': '热销榜'
    },
    {
      'name': '单人精彩套餐'
    }
  ],
  'ratings': [
    {
      'text': '不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.'
    },
    {
      'text': '送货速度很快'
    },
    {
      'text': '下雨天给快递小哥点个赞'
    }
  ]
})
```
2、在main.js中写入

```
import Resource from 'vue-resource'
Vue.use(Resource)

```
3、在对应的组件中，异步获取数据，如下：
```
export default {
  name: 'goods',
  data () {
    return {
      goods: [],//定义本组件的数据变量
    }
  },
  created () {
    this.$http.get('http://test.cn').then( // 异步访问mock数据的url地址 

      (successData) => { // 成功获取数据
        console.log(successData.body)
        this.goods = successData.body.goods // 获取到对应数据，赋给this.goods
      },

      (fileData) => { // 获取数据失败
        console.log(fileData)
      }

    )
  }
}
```
拿到数据以后再template模板中渲染就可以了
