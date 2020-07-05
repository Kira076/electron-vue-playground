<template>
  <div id="app">
    <k-nav-header/>
    <k-nav-sidebar/>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/Header'
  import sidebar from './components/Sidebar'

  export default {
    name: 'electron-vue-practice',
    components: {
      'k-nav-header': header,
      'k-nav-sidebar': sidebar
    }
  }
</script>

<style>
  /* CSS */
</style>
