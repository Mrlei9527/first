<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>11111111111111112222222222</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      user:{}
    }
  },
  mounted() {
      window.addEventListener('message', function (event) {
        console.log(event)
        if(event.data.type != "webpackOk"){
          this.user = {
            jfId: event.data.jfId,
            mobile: event.data.mobile
          }
        }
        console.log(this.user)
      })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
