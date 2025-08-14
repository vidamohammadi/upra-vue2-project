<template>
  <v-app dark>
    <div id="app" class="app-background">
      <MainView />
      <IntroductionSection />
    </div>
  </v-app>
</template>

<script>
  import MainView from '@/components/header/MainView.vue';
  import IntroductionSection from "@/components/IntroductionSection.vue";

  export default {
    components: {IntroductionSection, MainView}
  };
</script>

<style>
  .app-background {
    background-color: black;
    color: white;
    min-height: 100vh;
  }
</style>
