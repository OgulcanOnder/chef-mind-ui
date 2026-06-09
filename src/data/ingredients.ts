export interface Ingredient {
  id: number;
  name: string;
  ingredientCategoryId: number;
}

export interface RecipeProps {
  categoryId: number;
  onAdd: (ingredient: Ingredient) => void;
}

export interface ProduceIngredientProps {
  selectedIngredients: Ingredient[];
  onRemove: (id: number) => void;
}
