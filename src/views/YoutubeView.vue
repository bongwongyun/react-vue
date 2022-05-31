<template>
  <div>
    <Header />
    <YoutubeCont />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
import YoutubeCont from "@/components/YoutubeCont.vue";

export default {
  components: {
    Header,
    Footer,
    YoutubeCont,
  },
};
</script>
