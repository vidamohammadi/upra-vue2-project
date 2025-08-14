<template>
  <v-img
    :src="imageSrc"
    width="100%"
    :height="isMobile? '250px' : '550px'"
    position="center top"
    :contain="isMobile">
    <!--    <div class="gradient-overlay"></div>-->
    <MainNavbar />
    <div class="overlay-text-mobile" v-if="isMobile">
      <div>"تو تصمیم می‌گیری چقدر پرداخت کنی!"</div>
      <div>دنیایی از فیلم‌های متنوع ایرانی و خارجی</div>
      <div>تماشا هستید؟</div>
    </div>
    <div class="overlay-text" v-else>
      <div>"تو تصمیم می‌گیری چقدر پرداخت کنی!"</div>
      <div>دنیایی از فیلم‌های متنوع ایرانی و خارجی</div>
      <div>تماشا هستید؟</div>
    </div>
  </v-img>
</template>

<script>
  import imageSrc from '@/assets/Group.jpg';
  import MainNavbar from '@/components/header/MainNavbar.vue';

  export default {
    name: 'MainView',
    components: {MainNavbar},
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

<style>
  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      179.71deg,
      rgba(0, 0, 0, 0.855) 1.85%,
      rgba(0, 0, 0, 0) 39.23%,
      rgba(0, 0, 0, 0.855) 102.5%
    );
    z-index: 1;
  }
  .overlay-text-mobile{
    box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.5);
    width: 100%;
    text-align: center;
    margin-top: 50px;
    height: 100px;
    font-weight: 700;
    font-style: normal;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0;
    vertical-align: middle;
    color: white;
    direction: rtl;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .overlay-text {
    box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.5);
    width: 100%;
    text-align: center;
    margin-top: 150px;
    height: 300px;
    font-weight: 700;
    font-style: normal;
    font-size: 48px;
    line-height: 100px;
    letter-spacing: 0;
    vertical-align: middle;
    color: white;
    direction: rtl;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
