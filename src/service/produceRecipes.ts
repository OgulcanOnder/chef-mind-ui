import apiClient from "../data/apiClient";
import { RecipeResponse } from "../data/produceRecipe";

export const generateRecipeByIngredients = async (ingredients: string[]): Promise<RecipeResponse> => {
  const res = await apiClient.post<RecipeResponse>("/recipe/ai/generate", { ingredients });
  return res.data;
};
