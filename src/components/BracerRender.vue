<template>
  <svg width="100%" height="100%" :viewBox="viewBox">
    <circle style="stroke: lightblue; fill: none; stroke-width: 0.1;" cx="0" cy="0" :r="R1"/>
    <circle style="stroke: lightblue; fill: none; stroke-width: 0.1;" cx="0" cy="0" :r="R2"/>
    <path style="stroke: darkgoldenrod; fill: none; stroke-width: 0.2;" :d="fullpath"/>
    <path style="stroke: black; fill: none; stroke-width: 0.3;" :d="bracerpath"/>
  </svg>
  <p><a :href="svghref" download="bracer.svg">Download SVG</a></p>
</template>

<script>
export default {
  name: "BracerRender",
  props: {
    viewBox: String,
    R1: Number,
    R2: Number,
    fullpath: String,
    bracerpath: String
  },
  computed: {
    svghref() {
      return "data:image/svg," + encodeURIComponent(
          `<svg width="500px" height="500px" viewBox="${this.viewBox}" xmlns='http://www.w3.org/2000/svg'>` +
          `<circle style="stroke: lightblue; fill: none; stroke-width: 0.1;" cx="0" cy="0" r="${this.R1}" />` +
          `<circle style="stroke: lightblue; fill: none; stroke-width: 0.1;" cx="0" cy="0" r="${this.R2}" />` +
          `<path style="stroke: darkgoldenrod; fill: none; stroke-width: 0.2;" d="${this.fullpath}" />` +
          `<path style="stroke: black; fill: none; stroke-width: 0.3;" d="${this.bracerpath}" />` +
          `</svg>`)
    }
  }
}
</script>

<style scoped>

</style>