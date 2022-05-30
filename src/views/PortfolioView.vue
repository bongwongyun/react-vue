<template>
  <div>
    <Header />
    <PortfolioCont />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
import PortfolioCont from "@/components/PortfolioCont.vue";

export default {
  components: {
    Header,
    Footer,
    PortfolioCont,
  },
};
</script>
