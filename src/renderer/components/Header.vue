<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Header Bar</b-navbar-brand>
      <b-button v-b-toggle.sidebar-1>Navigation</b-button>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>

</style>
