<template>
  <div>
    <div class="switch-box" id="switch" onclick="onSwitch()" v-bind:class="{'switched': player == 'o'}">
      <div class="switch-inner">
        <div class="circle red"></div>
        <div class="circle blue"></div>
        <div class="hide"></div>
        <div class="circle cursor cursor1"></div>
        <div class="circle cursor cursor2"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: "Player",
    props: {
        player: {
          type: String,
        }
    },
    computed: {
      ...mapGetters(['players', 'isWin']),
    }
  }
</script>

<style lang="scss">
$red: #e43f5a;
$blue: #1f4068;
$grey: #E0E0E0;
$grey-light: #f1f3f4;
$width: 140px;
$margin: $width / 10;
$mixed: overlay;

.switch-box {
  background-color: white;
  display: inline-block;
  position: relative;
  border: 1px solid $grey;
  width: $width;
  height: $width / 2;
  border-radius: $width / 4;
  margin: 16px;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: inset 0 0 4px $grey;
  .switch-inner {
    cursor: pointer;
    position: relative;
    top: $margin/2;
    left: $margin/2;
    width: $width - $margin;
    height: $width/2 - $margin;
    .circle {
      position: absolute;
      z-index: 1;
      width: $width/2 - $margin;
      height: $width/2 - $margin;
      border-radius: 100%;
      &.red{
        background-color: $red;
        left: 0;
        top: 0;
      }
      &.blue{
        background-color: $blue;
        left: $width/2;
        top: 0;
      }
      &.cursor {
       transition: .4s all ease;
       left: 0;
      }
      &.cursor1 {
        z-index: 3;
        background-color: black;
        mix-blend-mode: $mixed;
      }
      &.cursor2 {
        z-index: 0;
        background-color: white;
        mix-blend-mode: $mixed;
      }
    }
    .hide {
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
      width: $width;
      height: $width/2 - $margin;
      border-radius: $width/2 - $margin;
      background-color: white;
      opacity: .5;
    }
  }
}

.switched {
  .cursor {
    left: $width/2 !important;
  }
}
</style>