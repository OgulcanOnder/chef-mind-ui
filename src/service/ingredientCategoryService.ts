import apiClient from "../data/apiClient";
import { IngredientCategory } from "../data/ingredientCategory";

export const getAllIngredientsCategory = async (): Promise<IngredientCategory[]> => {
  const rest = await apiClient.get<IngredientCategory[]>("/ingredient-categories");
  return rest.data;
};
