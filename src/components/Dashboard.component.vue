<template>
    <div class="grid">
        <div class="player">{{players[0]}}</div>
        <div class="row">
            <Case index="0"/>
            <Case index="1"/>
            <Case index="2"/>
        </div>
        <div class="row">
            <Case index="3"/>
            <Case index="4"/>
            <Case index="5"/>
        </div>
        <div class="row">
            <Case index="6"/>
            <Case index="7"/>
            <Case index="8"/>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Case from './Case.component';

  export default {
    name: "Dashboard",
    components: {
      Case,
    },
    computed: {
      ...mapGetters(['players']),
    },
  }
</script>

<style scoped>
    .grid {
        background-color: #ccc;
        box-shadow: 3px 3px 0 #aaa;
        width: fit-content;
        padding: 4px;
        margin: 0 auto;
        border-radius: 8px;
    }
    .player {
        font-size: 6em;
    }
    .case {
        border-radius: 4px;
        box-shadow: 3px 3px 0 #666;
        display: inline-block;
        width: 100px;
        height: 100px;
        background-color: #888;
        margin: 8px;
        font-size: 5em;
        color: #ddd;
        overflow: hidden;
    }
    .case > span {
        text-transform: uppercase;
        margin: auto auto;
    }
</style>