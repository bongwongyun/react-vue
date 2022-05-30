<template>
  <main id="main">
    <section className="refer__cont">
      <TitleCont name1="Reference" name2="book" />
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <table>
            <colgroup>
              <col style="width: 10%" />
              <col style="width: 20%" />
              <col style="width: 70%" />
            </colgroup>
            <tbody>
              <tr>
                <td>1</td>
                <td>align-content</td>
                <td>all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ContactCont />
    </section>
  </main>
</template>
<script>
import TitleCont from "@/components/TitleCont.vue";
import ContactCont from "@/components/ContactCont.vue";
export default {
  components: {
    TitleCont,
    ContactCont,
  },
};
</script>
<style lang="scss" scoped>
.refer__cont {
  background-color: var(--light);
  min-height: 100vh;
}
.refer__inner {
  transform: translateX(10px) translateY(50px);
  h2 {
    color: var(--dark);
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}
.refer__list {
  border-top: 2px solid var(--light_bg);
  border-bottom: 1px solid var(--light_bg);
  a {
    display: block;
    color: var(--light);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--light_bg);
    padding: 1.3rem 0;
    transition: all 0.3s;
    font-family: var(--sub_font);

    &:hover {
      background: var(--light_bg);
      color: var(--dark);
    }
    span {
      display: inline-block;
    }
    span:nth-child(1) {
      width: 5%;
      text-align: center;
    }
    span:nth-child(2) {
      width: 20%;
    }
    span:nth-child(3) {
      width: 65%;
    }
    span:nth-child(4) {
      width: 10%;
      text-align: center;
    }
  }
}
.refer__table {
  margin-top: 400px;
  color: var(--light);
  font-family: var(--subKor_font);

  h3 {
    font-size: 3rem;
  }
  p {
    background: var(--light);
    color: var(--dark);
    padding: 1.4em;
  }
  table {
    color: var(--light);
    font-family: var(--subKor_font);
    border: 1px solid var(--light_bg);
    margin-top: 0.5em;

    th,
    td {
      font-weight: normal;
      padding: 1em;
      border-bottom: 1px solid var(--light_bg);
      border-left: 1px solid var(--light_bg);
    }
  }
}
.light.refer__cont {
  background-color: var(--light);
  color: var(--dark);
  .refer__inner {
    h2 {
      color: var(--dark);
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    table {
      border-top: 1px solid var(--dark_border);
      border-bottom: 2px solid var(--dark_border);
      color: var(--dark);
      td {
        border-top: 1px solid var(--dark_border);
        padding: 1.4rem 0;
        font-family: var(--subKor_font);
        font-weight: 300;
      }
    }
  }
}
</style>
