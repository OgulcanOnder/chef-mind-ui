import "../style/CategorySection.css";
import "antd/dist/reset.css";
import Recipe from "./RecipeSection";

function Category() {
  return (
    <>
      <div className="category-main">
        <div className="category-title">
          <h3>Category 1</h3>
          <p className="category-border"> </p>
          <Recipe></Recipe>
        </div>
        <div className="category-title">
          <h3>Category 2</h3>
          <p className="category-border"> </p>
          <Recipe></Recipe>
        </div>
        <div className="category-title">
          <h3>Category 3</h3>
          <p className="category-border"> </p>
          <Recipe></Recipe>
        </div>
      </div>
    </>
  );
}
export default Category;
