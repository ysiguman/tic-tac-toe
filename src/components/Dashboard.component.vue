<template>
  <div>
    <div><Player :player="players[0]"/></div>
    <div class="grid">
      <Case :index="0"/>
      <Case :index="1"/>
      <Case :index="2"/>
      <Case :index="3"/>
      <Case :index="4"/>
      <Case :index="5"/>
      <Case :index="6"/>
      <Case :index="7"/>
      <Case :index="8"/>
      <div
        v-if="isWin"
        v-bind:class="{
            'first-row' : win.row ? win.row == 1 : false,
            'second-row': win.row ? win.row == 2 : false,
            'third-row': win.row ? win.row == 3 : false,
            'first-column' : win.column ? win.column == 1 : false,
            'second-column': win.column ? win.column == 2 : false,
            'third-column': win.column ? win.column == 3 : false,
            'red': players[0] == 'x',
            'blue': players[0] == 'o',
            'right-diag': win.diag ? win.diag == 'right' : false,
            'left-diag': win.diag ? win.diag == 'left' : false
          }"
        class="split"></div>
    </div>
    <div class="restart" @click="reset()">RESTART</div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex';
  import Case from './Case.component';
  import Player from './Player.component';

  export default {
    name: "Dashboard",
    components: {
      Case,
      Player
    },
    computed: {
      ...mapGetters(['players', 'grid', 'status', 'win', 'isWin']),
    },
    methods: {
      ...mapMutations(['SET_CASE']),
      ...mapActions(['resetGame']),
      reset() {
        this.resetGame();
      }
    }
  }
</script>

<style lang="scss">
    /* .grid {
        background-color: #ccc;
        box-shadow: 3px 3px 0 #aaa;
        width: fit-content;
        padding: 4px;
        margin: 0 auto;
        border-radius: 8px;
    } */
  .restart {
    font-size: 1.5rem;
    padding: 16px;
    cursor: pointer;
  }
  $red: #e43f5a;
  $blue: #1f4068;
  .grid {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    width: 400px;
    height: 400px;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    background-color: #E0E0E0;
    .split {
      position: absolute;
      width: 100%;
      height: 10px;
      border-radius: 5px;
      top: 50%;
      transform: translateY(-50%);
      grid-area: 1 / 1 / span 1 / span 3;
      animation: display .4s forwards; 

      &.first-row {
        grid-area: 1 / 1 / span 1 / span 3;
      }
      &.second-row {
        grid-area: 2 / 1 / span 1 / span 3;
      }
      &.third-row {
        grid-area: 3 / 1 / span 1 / span 3;
      }
      &.first-column {
        grid-area: 1 / 1 / span 3 / span 1;
        height: 100%;
        width: 10px;
        top: 0%;
        left: 50%;
        transform: translateX(-50%);
        animation: display-column .4s forwards;
      }
      &.second-column {
        grid-area: 1 / 2 / span 3 / span 1;
        height: 100%;
        width: 10px;
        left: 50%;
        top: 0%;
        transform: translateX(-50%);
        animation: display-column .4s forwards;
      }
      &.third-column {
        grid-area: 1 / 3 / span 3 / span 1;
        height: 100%;
        width: 10px;
        top: 0%;
        transform: translateX(-50%);
        left: 50%;
        animation: display-column .4s forwards;
      }
      &.left-diag {
        grid-area: 1 / 1 / span 3 / span 3;
        transform-origin: center left;
        transform: rotate(45deg);
        top: 0%;
        animation: display-diag .4s forwards;
      }
      &.right-diag {
        grid-area: 1 / 1 / span 3 / span 3;
        transform-origin: center left;
        transform: rotate(-45deg);
        animation: display-diag .4s forwards;
        top: calc(100% - 5px);
      }
      &.red {
        background-color: $red;
      }
      &.blue {
        background-color: $blue;
      }
    }

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
        transform: translate(-50%, -50%);
        width: 60px;
        height: 60px;
        border-radius: 50%;
        &.blue {
          background-color: $blue;
        }
        &.red {
          background-color: $red;
        }
      }
    }

    
    @keyframes display {
      0% { width: 0; }
      100% { width: 100%; }
    }
    @keyframes display-diag {
      0% { width: 0; }
      100% { width: 141%; }
    }
    @keyframes display-column {
      0% { height: 0; }
      100% { height: 100%; }
    }
  }
</style>