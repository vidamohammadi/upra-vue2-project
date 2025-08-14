<template>
  <v-img
    :src="imageSrc"
    width="100%"
    height="550px"
    position="center top">
<!--    <div class="gradient-overlay"></div>-->
    <MainNavbar />
    <div
      class="overlay-text"
      style="width: 100%; text-align: center; margin-top: 150px">
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
  .overlay-text {
    box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.5);

    width: 868px;
    height: 300px;
    font-weight: 700;
    font-style: normal;
    font-size: 48px;
    line-height: 100px;
    letter-spacing: 0;
    text-align: center;
    vertical-align: middle;
    color: white;
    direction: rtl;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
