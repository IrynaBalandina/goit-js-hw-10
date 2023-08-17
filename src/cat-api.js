import axios from 'axios';

const API_KEY =
'live_CzwpTRTG92NNmpw1QeINDfjQd5tF55cgqBJfjzi6cOkmdygVPA14QoEWbJu1O9hA';
const BASE_URL = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common['x-api-key'] = API_KEY;

function fetchBreeds() {
 
  return axios.get(`${BASE_URL}/breeds`);
 
}

function fetchCatByBreed(breedId) {
  return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
}

export { fetchBreeds, fetchCatByBreed };
