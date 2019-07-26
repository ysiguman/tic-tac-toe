<template>
    <div class="case" @click="select()">
        <span>{{ token }}</span>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';
  export default {
    name: "Case",
    computed: {
      ...mapGetters(['grid', 'players']),
    },
    data: () =>  ({
      token: null,
    }),
    props: {
        index: {
          type: String,
        }
    },
    methods: {
      ...mapMutations(['SET_CASE', 'CHANGE_PLAYERS']),
      select() {
        if(!this.token) {
          this.token = this.players[0];
          this.SET_CASE(this.index);
          this.CHANGE_PLAYERS();
        }
      }
    }
  }
</script>

<style scoped>
    .toto {
        font-size: 0.1em;
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