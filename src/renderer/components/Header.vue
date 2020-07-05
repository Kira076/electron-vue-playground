<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Header Bar</b-navbar-brand>
      <b-button v-b-toggle.sidebar-1>Sidebar</b-button>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>

</style>
