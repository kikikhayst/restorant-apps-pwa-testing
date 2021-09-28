import { createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate } from '../views/templates/templates-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestos, restaurant }) {
    this.LikeButtonContainer = likeButtonContainer;
    this.Restaurant = restaurant;
    this.FavoriteRestos = favoriteRestos;

    await this.RenderButton();
  },

  async RenderButton() {
    const { id } = this.Restaurant;

    if (await this.IsRestaurantExist(id)) {
      this.RenderLiked();
    } else {
      this.RenderLike();
    }
  },

  async IsRestaurantExist(id) {
    const restaurant = await this.FavoriteRestos.getResto(id);
    return !!restaurant;
  },

  RenderLike() {
    this.LikeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this.FavoriteRestos.putResto(this.Restaurant);
      this.RenderButton();
    });
  },

  RenderLiked() {
    this.LikeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this.FavoriteRestos.deleteResto(this.Restaurant.id);
      this.RenderButton();
    });
  },
};

export default LikeButtonPresenter;
