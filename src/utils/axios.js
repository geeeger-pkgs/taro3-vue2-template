import axios from 'axios';
import adapter from 'axios-miniprogram-adapter';

axios.defaults.adapter = adapter;

/**
 * 可以在此定义拦截器
 */
axios.interceptors.response.use((response) => {
  return response.data;
})

export default axios;
