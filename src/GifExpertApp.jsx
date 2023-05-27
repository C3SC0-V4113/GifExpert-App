import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Metal Gear", "Silent Hill"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/**titulo */}
      <h1>GifExpertApp</h1>
      {/**Input */}
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {/**Grid de Gifs
       *    GifItem
       */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
