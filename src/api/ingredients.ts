import axios from 'axios';
import configurations from '../config';

const INGREDIENTS_API = configurations.api.ingredients;

export const fetchIngredients = () => {
  return axios.get(INGREDIENTS_API).then(res => {
    return res.data.ingredients.map((ingredient: { [x: string]: any; title: any }) => {
      return {
        title: ingredient.title,
        bestBefore: ingredient['best-before'],
        useBy: ingredient['use-by']
      };
    });
  });
};
