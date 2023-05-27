import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Metal Gear", "Silent Hill"]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/**titulo */}
      <h1>GifExpertApp</h1>
      {/**Input */}
      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
        //setCategories={setCategories}
      />

      {/**Grid de Gifs
       *    GifItem
       */}
      <ol>
        {categories.map((category, index) => {
          return <li key={index}>{category}</li>;
        })}
      </ol>
    </>
  );
};
