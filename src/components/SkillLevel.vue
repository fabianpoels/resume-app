<template>
  <div id="skillLevel">
    <div id="orange">{{getOpacity()}}</div>
    <div id="corner"></div>
    <div id="fill"></div>
  </div>
</template>

<script>
export default {
  name: 'skillLevel',
  data () {
    return {

    }
  },
  methods: {
    getOpacity () {
      return (0.5 + ((this.level - 1) * 0.1666))
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
