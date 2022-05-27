<template>
  <main id="main">
    <TitleCont name1="about" name2="me" />
    <section class="about__Cont">
      <div class="about__inner">
        <div class="container">
          <div class="about__01" v-for="(item, index) in items" :key="index">
            <img :src="item.src" :alt="item.title" />
            <p>
              {{ item.title }} <br />
              <br />
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <ContactCont />
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
  data() {
    return {
      items: [
        {
          title: "꿈을 설계하고 디자인 하다.",
          desc: "나는 공간을 만드는 것을 좋아한다 어려을 때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 서울에는 집이 없지만, 이곳에서는 나만의 집이 많다. 그 집은 비용도 들지 않고 언제든지 만들 수 있다. 나만의 공간을 마음것 만들 수 있다는 건 코딩에 엄청난 매력인거 같다. 그 한구석에 나만의 꿈을 설계하고 디자인을 하며 앞으로도 살고 싶다.",
          src: "img/aboutImg01.jpg",
        },
        {
          title: "열심히 할수록 기회는 따른다.",
          desc: "운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다. 복권에 당첨되는 사람들은 금방 돈을 허비하게 된다. 단지 행운만 좋았기 때문이다. 운을 만든 사람은 돈을 날려먹거나 헛되게 쓰지 않는다. 열심히 할수록 운은 나에게 온다.",
          src: "img/aboutImg02.jpg",
        },
        {
          title: "나에게 정직하다",
          desc: " 정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다. 다름 사람에게도 정직해야 하지만 그 무엇보다 나 자신한테 정직해야 한다.",
          src: "img/aboutImg03.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.about__Cont {
  // background: var(--light);
}
.about__inner {
  background: var(--light);
  //   opacity: 0;
  transform: translateX(10px) translateY(50px);
}
.container {
  h3 {
    font-size: 10vh;
    padding: 10vw;
    padding-left: 0;
    font-family: var(--main_font);
    line-height: 1;
    margin-right: 20%;

    em {
      display: block;
    }
  }
}
.about__01:nth-child(1) {
  p {
    font-size: 18px;
    font-family: var(--sub_font);
    padding: 10vh;
    padding-left: 0;
    width: 77%;
  }
}
//about__02
.about__01:nth-child(2) {
  display: flex;
  justify-content: space-between;
  P {
    font-size: 18px;
    font-family: var(--sub_font);
    padding: 4vh;
    padding-right: 0;
    padding-top: 0;
  }
}
//about__03
.about__01:nth-child(3) {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  padding-top: 20%;
  padding-bottom: 20%;
  // img {
  //     flex-wrap: wrap;
  // }
  P {
    font-size: 18px;
    font-family: var(--sub_font);
    padding: 4vh;
    padding-left: 0;
    padding-top: 0;
  }
}
//라이트 모드
.light.about__Cont {
  background: var(--light);
}
</style>
