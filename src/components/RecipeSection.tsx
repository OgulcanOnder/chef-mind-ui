import "../style/RecipeSection.css";
import "antd/dist/reset.css";
import Card from "antd/es/card/Card";
import { recipes } from "../data/recipes";

const Recipe = () => {
  return (
    <>
      <div className="recipe-main">
        {recipes.map((recipe) => (
          <Card
            title={recipe.title}
            key={recipe.id}
          >
            <p>{recipe.picture}</p>
            <p>{recipe.content}</p>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Recipe;
