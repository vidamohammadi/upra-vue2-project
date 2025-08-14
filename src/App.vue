<template>
  <v-app dark>
    <div id="app" class="app-background">
      <MainView />
      <IntroductionSection />
      <NewsSection />
    </div>
  </v-app>
</template>

<script>
  import MainView from '@/components/header/MainView.vue';
  import IntroductionSection from "@/components/IntroductionSection.vue";
  import NewsSection from "@/components/news-section/NewsSection.vue";

  export default {
    components: {NewsSection, IntroductionSection, MainView}
  };
</script>

<style>
  .app-background {
    background-color: black;
    color: white;
    min-height: 100vh;
  }
</style>
