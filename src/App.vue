<template>
  <v-app dark>
    <div id="app" class="app-background">
      <MainView />
    </div>
  </v-app>
</template>

<script>
  import MainView from '@/components/header/MainView.vue';

  export default {
    components: {MainView}
  };
</script>

<style>
  .app-background {
    background-color: black;
    color: white;
    min-height: 100vh;
  }
</style>
