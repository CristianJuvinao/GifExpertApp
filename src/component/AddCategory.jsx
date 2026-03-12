import React, { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInput = (event) => {
    setInputValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 0) return;
    onAddCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="buscar gif"
          value={inputValue}
          onChange={onInput}
        />
      </form>
    </>
  );
};
