<template>
  <img id="svg" :src="svghref"/>
  <p><a :href="svghref" download="bracer.svg">Download SVG</a></p>
</template>

<script>
export default {
  name: "BracerRender",
  props: {
    SVGhw: Number,
    viewBox: String,
    R1: Number,
    R2: Number,
    fullpath: String,
    bracerpath: String
  },
  computed: {
    svghref() {
      return "data:image/svg+xml;utf8," + encodeURIComponent(
          `<svg width="30in" height="30in" viewBox="${this.viewBox}" xmlns='http://www.w3.org/2000/svg'>` +
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