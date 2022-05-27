<template>
  <div>
    <HeaderView />
    <MainView />
    <FooterView />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
import MainView from "@/components/MainView.vue";

export default {
  components: {
    HeaderView,
    FooterView,
    MainView,
  },
};
</script>
