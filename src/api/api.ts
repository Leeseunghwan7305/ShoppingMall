import axios from 'axios';

export const getAllProduct = async () => {
  try {
    const result = await axios.get('https://fakestoreapi.com/products');
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
