<template>
  <div dir="rtl">

    <v-img :src="item.image" :width="isMobile ? '130px' : '195px'" :height="isMobile ? '194px' : '290px'" class="rounded-lg"></v-img>
    <p class="my-3">{{item.name}}</p>
  </div>
</template>

<script>
  export default {
    name: 'FavoriteCard',
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    computed: {
      isMobile() {
        return this.$vuetify.breakpoint.smAndDown;
      }
    }

  };
</script>

<style scoped></style>
