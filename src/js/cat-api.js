import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_5LNqLi7hA220b3is0eAXsr4fXkIdpBzuUhUqHdIMTxsYbLuejzcODq9K4Nf7sk47';

export async function fetchBreeds() {
  const response = await axios.get('https://api.thecatapi.com/v1/breeds');
  return response.data;
}

export async function fetchCatByBreed(breedId) {
  const response = await axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
  return response.data;
}
