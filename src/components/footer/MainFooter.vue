<template>
  <v-container fluid class="px-0">
    <v-row class="d-flex justify-center">
      <v-img
        :src="logoSrc"
        max-height="62px"
        max-width="152px"
        style="margin-top: 50px; margin-bottom: 20px" />
    </v-row>
    <MobileFooter v-if="isMobile" />
    <DesktopFooter v-else />
  </v-container>
</template>

<script>
  import logoSrc from '@/assets/logo.804f1f4.svg';
  import DesktopFooter from '@/components/footer/DesktopFooter.vue';
  import MobileFooter from '@/components/footer/MobileFooter.vue';

  export default {
    name: 'MainFooter',
    components: {MobileFooter, DesktopFooter},
    data() {
      return {
        logoSrc
      };
    },
    computed: {
      isMobile() {
        return this.$vuetify.breakpoint.smAndDown;
      }
    }
  };
</script>

<style scoped></style>
