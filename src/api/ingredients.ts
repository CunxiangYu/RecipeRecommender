import axios from 'axios';
import configurations from '../config';

const INGREDIENTS_API = configurations.api.ingredients;

export const fetchIngredients = async () => {
  const response = await axios.get(INGREDIENTS_API);
  return response.data.ingredients.map((ingredient: { [x: string]: string; title: string }) => {
    // Transform object keys to camel case
    return {
      title: ingredient.title,
      bestBefore: ingredient['best-before'],
      useBy: ingredient['use-by']
    };
  });
};
