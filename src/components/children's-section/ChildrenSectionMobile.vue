<template>
  <v-container fluid class="backgroundCard">
    <v-row dir="rtl">
      <v-col cols="6">
        <v-img :src="appKids" width="159px" height="42px" class="mb-5" />
      </v-col>
      <v-col cols="11">
        <v-card
          style="background-color: #4b4bf959; color: white"
          width="95%"
          class="pa-2 rounded-lg">
          <p style="font-size: 12px">🎈 بخش اختصاصی کودکان</p>
          <p style="font-size: 12px">
            آپرا یک بخش ویژه برای کودکان دارد که محیطی امن، سرگرم‌کننده و
            آموزنده را برای فرزندان شما فراهم می‌کند.
          </p>
        </v-card>
        <v-card
          style="background-color: #00000099; color: white; margin-right: 30px;line-height: 25px"
          width="95%"
          class="pa-2 rounded-lg mt-5">
          <p style="font-size: 12px">
            👶 پروفایل مخصوص کودک شما
            <br />
            🔒 امنیت و کنترل والدین
            <br />
            💡 یادگیری در کنار سرگرمی
          </p>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-img
            :src="bobSfanji"
            width="204px"
            height="146px"
            class="mt-n10 pb-0 px-0" />
      </v-col>
      <v-col cols="3" class="px-0">
        <v-btn
            class="white--text rounded-xl"
            style="background-color: #ff6633;margin-top: 50px;font-size: 12px">
          ورود به آپرا کودک

        </v-btn>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  import appKids from '@/assets/appKids.png';
  import bobSfanji from '@/assets/bobSfanji.png';

  export default {
    name: 'ChildrenSectionMobile',
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
