/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked movies', async ({ I }) => {
  I.see('Maaf belum ada restaurant yang menjadi favorit Anda', '.notFound');
});

Scenario('liking one movie', async ({ I }) => {
  I.see('Maaf belum ada restaurant yang menjadi favorit Anda', '.notFound');
  I.amOnPage('/');

  I.seeElement('.itemDesc h1 a');
  const firstResto = locate('.itemDesc h1 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  // I.amOnPage('/');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.mainList');
  const likedRestaurantTitle = await I.grabTextFrom('.itemDesc h1');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
