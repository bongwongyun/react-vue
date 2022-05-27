<template>
  <section className="main__Cont">
    <div className="main__inner">
      <div v-for="list in lists" v-bind:key="list.text">{{ list.text }}</div>
      <button v-on:click="reverseMessage">메시지 뒤집기</button>
      <!-- <div>Are</div>
      <div>THE</div>
      <div>World</div> -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { text: "We" },
        { text: "Are" },
        { text: "THE" },
        { text: "World" },
      ],
    };
  },
  methods: {
    reverseMessage: function () {
      this.msg = this.msg.split("").reverse().join("");
    },
  },
};
</script>

<style lang="scss">
.main__Cont {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #fff;

  .main__inner {
    font-size: 10vw;
    line-height: 0.85;
    font-family: "Saol";
    color: #000;
    text-transform: uppercase;
  }
}
</style>
