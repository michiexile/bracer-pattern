<template>
  <IntroBlock msg="Customizable Arm Bracer Patterns">
    <p>This app will let you produce a made-to-measure arm bracer pattern based on your own body measurements.
      The design assumes that you want to produce a flat sheet that can be rolled into a truncated cone, and
      allows you to pick just a part of the truncated cone to cover in the end.</p>
    <p>The diagram has
      <b style="color: lightblue">construction curves</b>,
      <b style="color: darkgoldenrod">truncated cone surface</b>, and
      <b style="color: black">pattern surface</b>.</p>
    <p>To use it, measure circumference at your wrist (where the bracer starts), on your arm (where the bracer ends)
      and the length (along the arm) that you want your bracer to be.</p>
  </IntroBlock>
  <BracerComputing/>
</template>

<script>
import IntroBlock from './components/IntroBlock.vue'
import BracerComputing from './components/BracerComputing.vue'

export default {
  name: 'App',
  components: {
    IntroBlock,
    BracerComputing
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Fondamento&display=swap');

#app {
  font-family: Fondamento, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;

  padding: 0 15px;

  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 15px;
}

#intro {
  grid-area: 1 / 1 / 2 / 3;
  max-width: 600px;
}

#controls {
  grid-area: 2 / 1 / 3 / 2;
  max-width: 600px;
}

img#svg {
  grid-area: 1 / 2 / 3 / 3;
  width: 100%;
}

/* Styling */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Berkshire Swash', cursive;
}
</style>
