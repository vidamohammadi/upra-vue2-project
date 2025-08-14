<template>
  <v-container fluid class="px-lg-10 px-5">
    <v-row class="d-flex justify-space-between">
      <v-col
        :style="{
          fontSize: isMobile ? '9px' : '24px'
        }">
        مشاهده همه
      </v-col>
      <v-col
        dir="rtl"
        :style="{
          fontSize: isMobile ? '12px' : '24px'
        }">
        <p>
          {{ isMobile ? 'عناوین پیشنهادی' : 'فیلم های برگذیده' }}
        </p>
      </v-col>
    </v-row>
    <v-row dir="rtl">
      <div class="movies-row">
        <div v-for="(movie, index) in movies" :key="index" :class="isMobile? 'item-mobile' : 'movie-item'">
          <FavoriteCard :item="movie" />
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
  import FavoriteCard from '@/components/favorite-section/FavoriteCard.vue';
  import favoriteImage from '@/assets/favorite.jpg';

  export default {
    name: 'FavoriteSection',
    components: {FavoriteCard},
    data() {
      return {
        movies: [
          {name: 'انگاشته', image: favoriteImage},
          {name: 'انگاشته', image: favoriteImage},
          {name: 'انگاشته', image: favoriteImage},
          {name: 'انگاشته', image: favoriteImage},
          {name: 'انگاشته', image: favoriteImage},
          {name: 'انگاشته', image: favoriteImage},
          {name: 'انگاشته', image: favoriteImage},
          {name: 'انگاشته', image: favoriteImage},
          {name: 'انگاشته', image: favoriteImage},
          {name: 'انگاشته', image: favoriteImage},
          {name: 'انگاشته', image: favoriteImage}
        ]
      };
    },
    computed: {
      isMobile() {
        return this.$vuetify.breakpoint.smAndDown;
      }
    }
  };
</script>

<style scoped>
  .movies-row {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 16px;
    padding-bottom: 8px;
    scroll-behavior: smooth;
  }

  .movie-item {
    flex: 0 0 auto;
    width: 200px;
  }
  .item-mobile {
    flex: 0 0 auto;
    width: 130px;
  }

  .movies-row::-webkit-scrollbar {
    display: none;
  }
</style>
