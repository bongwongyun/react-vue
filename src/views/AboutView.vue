<template>
  <div>
    <Header />
    <AboutCont />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
import AboutCont from "@/components/AboutCont.vue";

export default {
  components: {
    Header,
    Footer,
    AboutCont,
  },
};
</script>
