<template>
  <div class="intro">
    <h1>{{ msg }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'IntroBlock',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
