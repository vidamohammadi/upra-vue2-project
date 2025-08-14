<template>
  <v-container fluid>
    <p dir="rtl" class="px-10">تازه های آپرا</p>
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows>
      <template v-slot:next>
        <v-icon size="24" color="white">mdi-arrow-right-bold-box</v-icon>
      </template>

      <template v-slot:prev>
        <v-icon size="24" color="white">mdi-arrow-left-bold-box</v-icon>
      </template>
      <v-slide-item
        v-for="(movie, index) in movies"
        :key="index"
        v-slot="{toggle}">
        <MovieCard :item="movie" @click="toggle" />
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>
<script>
  import MovieCard from '@/components/news-section/MovieCard.vue';
  import newBanner from '@/assets/newBanner.jpg';

  export default {
    name: 'NewsSection',
    components: {MovieCard},
    data() {
      return {
        model: null,
        movies: [
          {name: 'محصول ۱', image: newBanner},
          {name: 'محصول ۲', image: newBanner},
          {name: 'محصول ۳', image: newBanner},
          {name: 'محصول ۴', image: newBanner},
          {name: 'محصول ۵', image: newBanner},
          {name: 'محصول ۶', image: newBanner}
        ]
      };
    }
  };
</script>

<style scoped></style>
