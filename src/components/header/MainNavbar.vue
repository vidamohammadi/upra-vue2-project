<template>
  <v-row class="pa-5 d-flex justify-space-between">
    <v-col>
      <v-btn
        class="white--text rounded-lg px-2 mx-3"
        style="background-color: #ff6633">
        <v-icon size="20" color="white">mdi-chevron-down</v-icon>
        پروفایل
        <v-icon size="20" color="white" class="ml-1">
          mdi-account-circle-outline
        </v-icon>
      </v-btn>
      <v-btn
        style="background-color: #1b6be5"
        class="white--text rounded px-15">
        پرداخت خودکار
        <v-icon size="20" color="white" class="ml-1">mdi-credit-card</v-icon>
      </v-btn>
    </v-col>
    <v-col dir="rtl" class="d-flex align-top">
      <v-img :src="logoSrc" max-width="140px" max-height="65px"  class="mt-n3" ></v-img>
      <v-text-field
        class="search-field mx-5"
        dense
        placeholder="جستجوی فیلم، سریال، بازیگر و کارگردان"
        clearable
        outlined
        hide-details
        rounded-xl
        prepend-inner-icon="mdi-magnify"></v-text-field>
      <div class="white--text mt-2">
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
