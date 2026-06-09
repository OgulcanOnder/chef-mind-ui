import "../style/CategorySection.css";
import "antd/dist/reset.css";
import Recipe from "./IngredientsSection";
import { IngredientCategory } from "../data/ingredientCategory";
import { useState, useEffect } from "react";
import { getAllIngredientsCategory } from "../service/ingredientCategoryService";
import { Ingredient } from "../data/ingredients";

interface Props {
  onAdd: (ingredient: Ingredient) => void;
}
const Category = ({ onAdd }: Props) => {
  const [ingredientCategory, setIngredientCategory] = useState<IngredientCategory[]>([]);
  useEffect(() => {
    getAllIngredientsCategory()
      .then(setIngredientCategory)
      .catch(() => {});
  }, []);
  return (
    <>
      <div className="category-main">
        {ingredientCategory
          .sort((a, b) => a.id - b.id)
          .map((ingredientCategory) => (
            <div
              className="category-title"
              key={ingredientCategory.id}
            >
              <h3>{ingredientCategory.ingredientCategoryName}</h3>
              <p className="category-border"></p>
              <Recipe
                categoryId={ingredientCategory.id}
                onAdd={onAdd}
              />
            </div>
          ))}
      </div>
    </>
  );
};
export default Category;
