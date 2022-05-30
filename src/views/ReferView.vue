<template>
  <div>
    <Header />
    <ReferCont />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
import ReferCont from "@/components/ReferCont.vue";

export default {
  components: {
    Header,
    Footer,
    ReferCont,
  },
};
</script>
