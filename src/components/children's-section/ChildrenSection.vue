<template>
  <v-container fluid class="px-10 backgroundCard">
    <v-row dir="rtl">
      <v-col cols="3">
        <v-img :src="appKids" width="159px" height="42px" class="mb-5" />
        <v-img
          :src="bobSfanji"
          width="352px"
          height="252px"
          class="mb-0 pb-0" />
      </v-col>
      <v-col cols="7">
        <v-card
          style="background-color: #4b4bf959; color: white"
          width="70%"
          class="pa-2 rounded-lg">
          <p style="font-size: 18px">🎈 بخش اختصاصی کودکان</p>
          <p style="font-size: 16px">
            آپرا یک بخش ویژه برای کودکان دارد که محیطی امن، سرگرم‌کننده و
            آموزنده را برای فرزندان شما فراهم می‌کند.
          </p>
        </v-card>
        <v-card
          style="background-color: #00000099; color: white; margin-right: 220px"
          width="70%"
          class="pa-2 rounded-lg mt-5">
          <p style="font-size: 18px">👶 پروفایل مخصوص کودک شما</p>
          <p style="font-size: 18px">🔒 امنیت و کنترل والدین</p>
          <p style="font-size: 18px">💡 یادگیری در کنار سرگرمی</p>
        </v-card>
      </v-col>

      <v-col cols="2">
        <v-btn
          class="white--text rounded-lg px-2 mx-3"
          style="background-color: #ff6633;margin-top: 250px">
          ورود به آپرا کودک
          <v-icon size="20" color="white" class="ml-1">
            mdi-login-variant
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import appKids from '@/assets/appKids.png';
  import bobSfanji from '@/assets/bobSfanji.png';
  export default {
    name: 'ChildrenSection',
    data() {
      return {
        appKids,
        bobSfanji
      };
    }
  };
</script>

<style scoped>
  .backgroundCard {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 12, 36, 1) 100%
    );
  }
</style>
