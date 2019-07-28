<template>
    <div class="case" @click="select()">
        <span>{{ grid[index] }}</span>
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
        if(!this.grid[this.index]) {
          this.setCase(this.index);
        }
      }
    },
    computed: {
      ...mapGetters(['grid', 'players']),
    },
  }
</script>

<style scoped>
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