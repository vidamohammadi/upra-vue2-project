<template>
  <v-img
    :src="imageSrc"
    width="100%"
    height="550px"
    position="center top"></v-img>
</template>

<script>
  import imageSrc from '@/assets/Group.jpg';

  export default {
    name: 'MainView',
    data() {
      return {imageSrc};
    }
  };
</script>

<style></style>
