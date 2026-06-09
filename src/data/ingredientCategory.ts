import { Ingredient } from "./ingredients";

export interface IngredientCategory {
  id: number;
  ingredientCategoryName: string;
}

export interface Props {
  onAdd: (ingredient: Ingredient) => void;
}
