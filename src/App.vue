<template>
  <v-app dark>
    <div id="app" class="app-background">
      <MainView />
      <IntroductionSection />
      <NewsSection />
      <FavoriteSection />
    </div>
  </v-app>
</template>

<script>
  import MainView from '@/components/header/MainView.vue';
  import IntroductionSection from "@/components/IntroductionSection.vue";
  import NewsSection from "@/components/news-section/NewsSection.vue";
  import FavoriteSection from "@/components/favorite-section/FavoriteSection.vue";

  export default {
    components: {FavoriteSection, NewsSection, IntroductionSection, MainView}
  };
</script>

<style>
  .app-background {
    background-color: black;
    color: white;
    min-height: 100vh;
  }
</style>
