import "./style/App.css";
import Header from "./components/Header";
import Category from "./components/CategorySection";
import ProduceRecipes from "./components/ProduceRecipes";
import { useState } from "react";
import { Ingredient } from "./data/ingredients";

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const handleAdd = (ingredient: Ingredient) => {
    setSelectedIngredients((prev) => (prev.find((i) => i.id === ingredient.id) ? prev : [...prev, ingredient]));
  };
  const handleRemove = (id: number) => {
    setSelectedIngredients((prev) => prev.filter((i) => i.id !== id));
  };
  return (
    <>
      <Header />
      <div className="app-contents">
        <Category onAdd={handleAdd} />
        <ProduceRecipes
          selectedIngredients={selectedIngredients}
          onRemove={handleRemove}
        />
      </div>
    </>
  );
}

export default App;
