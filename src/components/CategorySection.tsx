import "../style/CategorySection.css";
import "antd/dist/reset.css";
import Recipe from "./RecipeSection";

const categories = [
  {
    id: 1,
    title: "Category 1",
  },
  {
    id: 2,
    title: "Category 2",
  },
  {
    id: 3,
    title: "Category 3",
  },
];

const Category = () => {
  return (
    <>
      <div className="category-main">
        {categories.map((category) => (
          <div
            className="category-title"
            key={category.id}
          >
            <h3>{category.title}</h3>
            <p className="category-border"></p>
            <Recipe />
          </div>
        ))}
      </div>
    </>
  );
};
export default Category;
