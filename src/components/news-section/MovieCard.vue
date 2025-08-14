<template>
  <v-card class="rounded-lg ml-5">
    <v-img :src="item.image" width="300px" height="250px"></v-img>
  </v-card>
</template>

<script>
  export default {
    name: 'MovieCard',
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  };
</script>

<style scoped></style>
