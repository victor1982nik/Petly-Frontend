import axios from 'axios';
import { BACKEND_BASE_URL } from 'utils/appKeys';

axios.defaults.baseURL = `http://${BACKEND_BASE_URL}`;

const getNews = async () => {
  let response = null;

  try {
    response = await axios.get('/api/news');
  } catch (error) {
    console.log(error);
  }

  return response.data;
};

export default getNews;
