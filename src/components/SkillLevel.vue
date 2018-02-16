<template>
  <div class="skillLevel">
    <div class="fill" v-bind:style="{width: getWidth(), opacity: getOpacity(), animation: getAnimation()}"></div>
    <div class="corner" v-bind:style="{opacity: getOpacity()}"></div>
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
    getWidth () {
      return '' + this.level * 40 + 'px'
    },
    getOpacity () {
      switch (this.level) {
        case 1:
          return 0.4
          break
        case 2:
          return 0.6
          break
        case 3:
          return 0.8
          break
        default:
          return 1
      }
    },
    getAnimation() {
      return 'fill' + this.level + ' 1s ease-in'
    }
  },
  props: ['level']
}
</script>

<style>
/*
this can/should be done in a much more elegant way
*/

.skillLevel {
  margin-top: 8px;
  width: 200px;
  display: flex;
  float: right;
  margin-right: 60px;
  background-color: #f2f2f2;
}

.fill {
  height: 12px;
  background: #f2511b;
}

.corner {
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid #f2511b;
  border-left: 6px solid #f2511b;
  border-right: 6px solid transparent;
  transform: scale(0.5, 1) translateX(-7px);
}

@keyframes fill1 {
  from {width: 0;}
  to {width: 40px;}
}

@keyframes fill2 {
  from {width: 0;}
  to {width: 80px;}
}

@keyframes fill3 {
  from {width: 0;}
  to {width: 120px;}
}

@keyframes fill4 {
  from {width: 0;}
  to {width: 160px;}
}

@keyframes fill5 {
  from {width: 0;}
  to {width: 200px;}
}
</style>
