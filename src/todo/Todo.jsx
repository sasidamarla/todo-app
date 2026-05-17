import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [items, setItems] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() === "") return;

    const newItem = {
      id: Date.now(),
      text: inputValue,
      status: false,
    };

    setItems([...items, newItem]);
    setInputValue("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item,
      ),
    );
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div
        className="rounded-2xl p-8 w-full max-w-md"
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.3)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Todo App</h2>
        <TodoInput
          inputValue={inputValue}
          handleInput={handleInput}
          addItem={addItem}
        />
        <TodoList
          items={items}
          deleteItem={deleteItem}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
};
