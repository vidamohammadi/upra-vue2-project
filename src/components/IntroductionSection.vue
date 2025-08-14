<template>
  <v-container fluid class="pa-lg-10 pa-5">
    <v-row class="justify-space-between" dir="rtl">
      <v-col cols="12" lg="4">
        <v-img :src="imageSrc"></v-img>
      </v-col>
      <v-col
        cols="12"
        lg="6"
        :style="{
          width: '100%',
          marginTop: isMobile ? '1px' : '200px'
        }">
        <v-row>
          <p v-if="isMobile" class="white--text pr-lg-10">
            هر لحظه و هرجا با آپرا فیلم ببین!
          </p>
          <h2 v-else class="white--text font-weight-bold pr-10">
            هر لحظه و هرجا با آپرا فیلم ببین!
          </h2>
        </v-row>
        <v-row class="d-flex align-center pr-lg-10">
          <v-col cols="12" lg="3">
            <v-icon size="20" color="white">mdi-cellphone</v-icon>
            <span
              class="mx-2"
              :style="{
                fontSize: isMobile ? '12px' : ''
              }">
              اپ موبایل
            </span>
          </v-col>

          <v-col cols="5" lg="3" class="ml-2">
            <v-btn
              color="#ff6633"
              class="white--text d-flex rounded-lg mx-2 fixed-size-btn"
              large
              :style="{
                fontSize: isMobile ? '12px' : ''
              }">
              <v-icon size="20">mdi-apple</v-icon>
              <span class="mx-2">نسخه ios</span>
              <v-icon size="15">mdi-chevron-up</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="5" lg="3">
            <v-btn
              color="#ff6633"
              class="white--text rounded-lg mx-2 fixed-size-btn"
              large
              :style="{
                fontSize: isMobile ? '12px' : ''
              }">
              <v-icon size="20">mdi-android</v-icon>
              <span class="mx-2">نسخه اندروید</span>

              <v-icon size="15">mdi-chevron-up</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-row class="d-flex align-center pr-lg-10">
          <v-col cols="12" lg="3">
            <v-icon size="20" color="white">mdi-television-box</v-icon>
            <span
              class="mx-2"
              :style="{
                fontSize: isMobile ? '12px' : ''
              }">
              اپ تلویزیون
            </span>
          </v-col>

          <v-col cols="5" lg="3" class="ml-2">
            <v-btn
              color="#ff6633"
              class="white--text rounded-lg mx-2 fixed-size-btn"
              large
              :style="{
                fontSize: isMobile ? '12px' : ''
              }">
              <v-icon size="20">mdi-television</v-icon>
              <span class="mx-2">نسخه اپ</span>
              <v-icon size="15">mdi-chevron-up</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="5" lg="3">
            <v-btn
              color="#ff6633"
              class="white--text rounded-lg mx-2 fixed-size-btn"
              large
              :style="{
                fontSize: isMobile ? '12px' : ''
              }">
              <v-icon size="20">mdi-web</v-icon>
              <span class="mx-2">دسترسی با مرورگر</span>
              <v-icon size="15">mdi-chevron-up</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import imageSrc from '@/assets/introduction.png';

  export default {
    name: 'IntroductionSection',
    data() {
      return {imageSrc};
    },
    computed: {
      isMobile() {
        return this.$vuetify.breakpoint.smAndDown;
      }
    }
  };
</script>

<style scoped>
  .fixed-size-btn {
    min-width: unset !important;
    width: 155px;
    height: 40px;
  }
</style>
