<template>
  <section className="Contact__cont">
    <div className="container">
      <div className="Contact__inner">
        <h2>
          You are <span>already <em>doing well.</em></span>
        </h2>
        <p>
          같은 목표를 위해 달려갈 웹 퍼블리셔 프론트 앤드 개발자를 모집합니다.
          관심 있는 분들은 카카오톡 또는 카페에 문의해주세요.
        </p>
      </div>
    </div>
  </section>
  <ContactCont />
</template>
<script>
import ContactCont from "@/components/ContactCont.vue";
export default {
  components: {
    ContactCont,
  },
};
</script>

<style lang="scss">
.Contact__cont {
  background-color: var(--light);
  min-height: 100vh;
}
.Contact__inner {
  padding-top: 10vh;
  h2 {
    color: var(--dark);
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
    color: var(--dark);
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
