<template>
  <div>
    <Header />
    <ContentsCont />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
import ContentsCont from "@/components/ContentsCont.vue";

export default {
  components: {
    Header,
    ContentsCont,
    Footer,
  },
};
</script>
