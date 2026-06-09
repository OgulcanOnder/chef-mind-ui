import "../style/IngredientsSection.css";
import "antd/dist/reset.css";
import { Button, Card, ConfigProvider, Col, Row } from "antd";
import { useState, useEffect } from "react";
import { getAllIngredients } from "../service/ingredientService";
import { Ingredient } from "../data/ingredients";
import { RecipeProps } from "../data/ingredients";

const { Meta } = Card;

const Recipe = ({ categoryId, onAdd }: RecipeProps) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  useEffect(() => {
    getAllIngredients()
      .then(setIngredients)
      .catch(() => {});
  }, []);
  return (
    <>
      <div className="recipe-main">
        <Row gutter={[12, 12]}>
          {ingredients
            .filter((ingredient) => ingredient.ingredientCategoryId === categoryId)
            .map((ingredient) => (
              <Col
                span={8}
                key={ingredient.id}
              >
                <Card
                  className="recipe-card"
                  cover={
                    <img
                      src={`/ingredients/${ingredient.id}.jpg`}
                      alt={ingredient.name}
                      style={{ width: 236, height: 150, objectFit: "cover" }}
                    />
                  }
                >
                  <Meta title={ingredient.name} />
                  <div className="add-button">
                    <ConfigProvider
                      button={{
                        className: "linear-gradient-button",
                      }}
                    >
                      <Button
                        type="primary"
                        size="medium"
                        onClick={() => onAdd(ingredient)}
                      >
                        Add
                      </Button>
                    </ConfigProvider>
                  </div>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
};

export default Recipe;
