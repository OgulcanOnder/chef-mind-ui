import "../style/RecipeSection.css";
import "antd/dist/reset.css";
import Card from "antd/es/card/Card";
function Recipe() {
  return (
    <>
      <div className="recipe-main">
        <Card title="Recipe Title">
          <p> Card Picture</p>
          <p> Card Content 1</p>
        </Card>
        <Card title="Recipe Title">
          <p> Card Picture</p>
          <p> Card Content 2</p>
        </Card>
        <Card title="Recipe Title">
          <p> Card Picture</p>
          <p> Card Content 3</p>
        </Card>
        <Card title="Recipe Title">
          <p> Card Picture</p>
          <p> Card Content 4</p>
        </Card>
      </div>
    </>
  );
}

export default Recipe;
