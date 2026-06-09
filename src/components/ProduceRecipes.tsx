import { Button, ConfigProvider, Divider, Drawer, List, Space } from "antd";
import { useState } from "react";
import { Ingredient, ProduceIngredientProps } from "../data/ingredients";
import "../style/ProduceRecipes.css";
import { DeleteOutlined } from "@ant-design/icons";

const ProduceRecipes = ({ selectedIngredients, onRemove }: ProduceIngredientProps) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="produce-recipe-main">
      <Divider titlePlacement="start">Produce Recipe</Divider>
      <List
        header={
          <div>
            <b>Selected Material List</b>
          </div>
        }
        dataSource={selectedIngredients}
        locale={{ emptyText: " No materials added" }}
        renderItem={(item: Ingredient) => (
          <List.Item
            actions={[
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                onClick={() => onRemove(item.id)}
              />,
            ]}
          >
            {item.name}
          </List.Item>
        )}
      />
      <div>
        <ConfigProvider
          button={{
            className: "linear-gradient-button",
          }}
        >
          <Space>
            <Button
              type="primary"
              size="medium"
              onClick={showDrawer}
            >
              Create Recipe
            </Button>
            <Drawer
              title="AI Recipe"
              closable={{ "aria-label": " Close Button" }}
              onClose={onClose}
              open={open}
              styles={{
                mask: {
                  backdropFilter: "blur(6px)",
                },
              }}
            >
              <p> AI Recipe Will Come...</p>
              <p> AI Recipe Will Come...</p>
              <p> AI Recipe Will Come...</p>
            </Drawer>
          </Space>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default ProduceRecipes;
