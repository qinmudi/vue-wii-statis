<template>
  <div id="app">
    <button type="button" v-statis="{evtId:'ios_download', value: { color: 'block', text: 'ok' }}" @click="test">字面量统计</button>

    <button type="button" v-statis="mystatis" @click="test">变量统计</button>

    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      mystatis:{
        evtId: 'android_download',
        value: {
          color: 'red',
          text: 'yes'
        }
      }
    }
  },
  methods:{
    test(){
      this.$statis.traceEvent('style_download',{color: 'green', text: 'are you ok?'});
      console.log(123123);
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
  margin-top: 60px;
}
</style>
