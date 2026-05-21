import apiClient from "../data/apiClient";

export const getAllIngredientsCategory = async () => {
  const rest = await apiClient.get("/ingredient-categories");
  return rest.data;
};
