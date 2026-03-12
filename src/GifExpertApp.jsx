import { useState } from "react";
import "./style.css";
import { GifGrid, AddCategory } from "./component";

export const GifExpertApp = () => {
  const [Categories, setCategories] = useState(["Naruto"]);

  const onAddCategory = (newCategory) => {
    const category = newCategory.trim();

    if (Categories.includes(category)) {
      alert("Ese elemento ya está en la lista");
      return;
    }

    setCategories([category, ...Categories]);
  };

  const onDeleteCategory = (category) => {
    setCategories(Categories.filter(cat => cat !== category));
  };

  return (
    <div className="app-container">
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      <ol>
        {Categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
            onDeleteCategory={onDeleteCategory}
          />
        ))}
      </ol>
    </div>
  );
};