<template>
  <v-row class="pa-5 d-flex justify-space-between">
    <v-col lg="6" cols="9">
      <v-btn
        class="white--text rounded-lg px-2 mx-3"
        style="background-color: #ff6633"
        v-if="isDesktop">
        <v-icon size="20" color="white">mdi-chevron-down</v-icon>
        پروفایل

        <v-icon size="20" color="white" class="ml-1">
          mdi-account-circle-outline
        </v-icon>
      </v-btn>
      <v-btn
        v-else
        class="white--text rounded-lg mx-1"
        style="background-color: #ff6633">
        ورود
      </v-btn>
      <v-btn
        style="background-color: #1b6be5"
        class="white--text rounded-lg px-lg-15 px-1">
        پرداخت خودکار
        <v-icon size="20" color="white" class="ml-1">mdi-credit-card</v-icon>
      </v-btn>
    </v-col>
    <v-col dir="rtl" class="d-flex align-top" lg="6" cols="3">
      <v-img
        :src="logoSrc"
        :max-width="isDesktop ? '140px' : '80px'"
        max-height="65px"
        class="mt-n3"></v-img>
      <v-text-field
        v-if="isDesktop"
        class="search-field mx-5"
        dense
        placeholder="جستجوی فیلم، سریال، بازیگر و کارگردان"
        clearable
        outlined
        hide-details
        rounded-xl
        prepend-inner-icon="mdi-magnify"></v-text-field>
      <div class="white--text mt-2" v-if="isDesktop">
        <v-icon size="20" color="white">mdi-penguin</v-icon>
        کودک
      </div>
    </v-col>
  </v-row>
</template>

<script>
  import logoSrc from '@/assets/logo.804f1f4.svg';

  export default {
    name: 'MainNavbar',
    data() {
      return {logoSrc};
    },
    computed: {
      isDesktop() {
        return this.$vuetify.breakpoint.mdAndUp;
      }
    }
  };
</script>

<style>
  .search-field .v-icon {
    color: white !important;
  }
  .search-field input::placeholder {
    color: white !important;
    opacity: 1 !important;
  }
  .v-text-field--outlined fieldset {
    color: white !important;
  }
</style>
