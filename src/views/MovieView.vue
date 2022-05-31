<template>
  <div>
    <Header />
    <MovieCont />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
import MovieCont from "@/components/MovieCont.vue";

export default {
  components: {
    Header,
    Footer,
    MovieCont,
  },
};
</script>
