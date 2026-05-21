import apiClient from "../data/apiClient";

export const getAllIngredients = async () => {
  const res = await apiClient.get("/ingredient");
  return res.data;
};
