import "./style/App.css";
import Header from "./components/Header";
import Category from "./components/CategorySection";
import ProduceRecipes from "./components/ProduceRecipes";

function App() {
  return (
    <>
      <Header />
      <div className="app-contents">
        <Category />
        <ProduceRecipes />
      </div>
    </>
  );
}

export default App;
