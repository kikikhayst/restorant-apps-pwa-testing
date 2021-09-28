/* eslint-disable no-return-assign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestaurantContract';

let favoriteRestos = [];

const FavoriteMovieArray = {

  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestos.find((movie) => movie.id === id);
  },

  getAllRestos() {
    return favoriteRestos;
  },

  putResto(movie) {
    if (!movie.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteMovies
    if (this.getResto(movie.id)) {
      return;
    }

    favoriteRestos.push(movie);
  },

  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestos = favoriteRestos.filter((movie) => movie.id !== id);
  },
};

describe('Favorite Movie Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestos = []);

  itActsAsFavoriteRestoModel(FavoriteMovieArray);
});
