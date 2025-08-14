<template>
  <v-app dark>
    <div id="app" class="app-background">
      <MainView />
      <IntroductionSection />
      <NewsSection />
      <FavoriteSection />
      <ChildrenSection />
    </div>
  </v-app>
</template>

<script>
  import MainView from '@/components/header/MainView.vue';
  import IntroductionSection from "@/components/IntroductionSection.vue";
  import NewsSection from "@/components/news-section/NewsSection.vue";
  import FavoriteSection from "@/components/favorite-section/FavoriteSection.vue";
  import ChildrenSection from "@/components/children's-section/ChildrenSection.vue";

  export default {
    components: {ChildrenSection, FavoriteSection, NewsSection, IntroductionSection, MainView}
  };
</script>

<style>
  .app-background {
    background-color: black;
    color: white;
    min-height: 100vh;
  }
</style>
