<template>
    <div class="grid">
        <div class="player">{{players[0]}}</div>
        <div class="row">
            <Case :index="0"/>
            <Case :index="1"/>
            <Case :index="2"/>
        </div>
        <div class="row">
            <Case :index="3"/>
            <Case :index="4"/>
            <Case :index="5"/>
        </div>
        <div class="row">
            <Case :index="6"/>
            <Case :index="7"/>
            <Case :index="8"/>
        </div>
    </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  import Case from './Case.component';

  export default {
    name: "Dashboard",
    components: {
      Case,
    },
    computed: {
      ...mapGetters(['players', 'grid']),
    },
    methods: {
      ...mapMutations(['SET_CASE']),
    }
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
</style>