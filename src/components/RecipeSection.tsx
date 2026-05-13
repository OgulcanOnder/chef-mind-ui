import "../style/RecipeSection.css";
import "antd/dist/reset.css";
import Card from "antd/es/card/Card";
const recipes = [
  {
    id: 1,
    title: "Recipe 1",
    picture: "Recipe 1 Picture",
    content: "Recipe 1 Content ",
  },
  {
    id: 2,
    title: "Recipe 2",
    picture: "Recipe 2 Picture",
    content: "Recipe 2 Content ",
  },
  {
    id: 3,
    title: "Recipe 3",
    picture: "Recipe 3 Picture",
    content: "Recipe 3 Content ",
  },
  {
    id: 4,
    title: "Recipe 4",
    picture: "Recipe 4 Picture",
    content: "Recipe 4 Content ",
  },
];
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
