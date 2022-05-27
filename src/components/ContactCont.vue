<template>
  <section className="cont__contact">
    <p>let`s create something</p>
    <h3>let`s get in to the sky</h3>
    <a href="/">contact me</a>
  </section>
</template>

<style lang="scss">
.Contact__cont {
  background-color: var(--dark);
  min-height: 100vh;
}
.Contact__inner {
  padding-top: 10vh;
  h2 {
    color: var(--light);
    font-family: var(--main_font);
    font-size: 15vh;
    margin-bottom: 4rem;
    line-height: 1;
    text-transform: uppercase;
    text-align: left;
    white-space: nowrap;

    span {
      display: block;
      text-align: left;
      padding-left: 15%;
      em {
        display: block;
        text-align: right;
        padding-left: 15%;
      }
    }
  }
  p {
    color: var(--light);
    margin-left: 70%;
    min-height: 300px;
  }
}
@media (max-width: 600px) {
  p {
    text-align: center;
    margin-left: 0;
  }
}
</style>
