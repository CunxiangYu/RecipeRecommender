import axios from 'axios';
import configurations from '../config';

const RECIPES_API = configurations.api.recipes;

export const fetchRecipes = async () => {
  const response = await axios.get(RECIPES_API);
  return response.data.recipes;
};
