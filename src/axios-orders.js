import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://burger-app-79196-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default instance;
