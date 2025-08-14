<template>
  <div dir="rtl">

    <v-img :src="item.image" width="195px" height="290px" class="rounded-lg"></v-img>
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

  };
</script>

<style scoped></style>
