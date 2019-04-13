import axios from 'axios';
import configurations from '../config';

const RECIPES_API = configurations.api.recipes;

export const fetchRecipes = () => {
  return axios.get(RECIPES_API).then(res => {
    return res.data.recipes;
  });
};
