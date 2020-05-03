<template>
    <div class="case" @click="select()">
      <div class="circle" v-bind:class="{'red': grid[index] == 'x', 'blue': grid[index] == 'o'}"></div>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: "Case",
    props: {
        index: {
          type: Number,
        }
    },
    methods: {
      ...mapActions(['setCase']),
      select() {
        if(!this.grid[this.index] && this.status === 'PLAY') {
          this.setCase(this.index);
        }
      }
    },
    computed: {
      ...mapGetters(['players', 'grid', 'status']),
    },
  }
</script>

<style lang="scss" scoped>
    $red: #e43f5a;
    $blue: #1f4068;
    // .case {
    //     border-radius: 4px;
    //     box-shadow: 3px 3px 0 #666;
    //     display: inline-block;
    //     width: 100px;
    //     height: 100px;
    //     background-color: #888;
    //     margin: 8px;
    //     font-size: 5em;
    //     color: #ddd;
    //     overflow: hidden;
    // }
    // .case > span {
    //     text-transform: uppercase;
    //     margin: auto auto;
    // }
    .case {
      position: relative;
      grid-area: span 1 / span 1;
      cursor: pointer;
      transition: 0.2s all ease;
      background-color: #fff;
      .circle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: scale(0) translate(-50%, -50%);
        width: 60px;
        height: 60px;
        border-radius: 50%;
        transition: 0.4s all ease;
        &.blue {
          background-color: $blue;
          transform: scale(1) translate(-50%, -50%);
        }
        &.red {
          background-color: $red;
          transform: scale(1) translate(-50%, -50%);
        }
      }
    }
</style>