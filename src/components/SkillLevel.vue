<template>
  <div id="skillLevel">
    <img v-if="level < 1" src="static/circle_empty.png" width="15px" height="15px">
    <img v-else src="static/circle_filled.png" width="15px" height="15px">

    <img v-if="level < 2" src="static/circle_empty.png" width="15px" height="15px">
    <img v-else src="static/circle_filled.png" width="15px" height="15px">

    <img v-if="level < 3" src="static/circle_empty.png" width="15px" height="15px">
    <img v-else src="static/circle_filled.png" width="15px" height="15px">

    <img v-if="level < 4" src="static/circle_empty.png" width="15px" height="15px">
    <img v-else src="static/circle_filled.png" width="15px" height="15px">

    <img v-if="level < 5" src="static/circle_empty.png" width="15px" height="15px">
    <img v-else src="static/circle_filled.png" width="15px" height="15px">
  </div>
</template>

<script>
export default {
  name: 'skillLevel',
  data () {
    return {

    }
  },
  props: ['level']
}
</script>

<style>
#skillLevel {
  display: inline;
  float: right;
  margin-right: 60px;
}
</style>
