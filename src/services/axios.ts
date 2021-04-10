import Axios from 'axios';

export default Axios.create({
  baseURL: process.env.APP_URL,
});
