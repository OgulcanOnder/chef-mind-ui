import apiClient from "../data/apiClient";
import { Ingredient } from "../data/ingredients";

export const getAllIngredients = async (): Promise<Ingredient[]> => {
  const res = await apiClient.get<Ingredient[]>("/ingredient");
  return res.data;
};
