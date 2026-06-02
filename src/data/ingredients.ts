export interface Ingredient {
  id: number;
  name: string;
  ingredientCategoryId: number;
}

export interface RecipeProps {
  categoryId: number;
}
