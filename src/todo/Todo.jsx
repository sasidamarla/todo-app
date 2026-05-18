import { useEffect, useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");
  const filters = ["all", "active", "completed"];

  const handleFiltering = () => {
    if (filter === "active") {
      return items.filter((item) => !item.status);
    }
    if (filter === "completed") {
      return items.filter((item) => item.status);
    } else {
      return items;
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

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

  const clearCompleted = () => {
    setItems(items.filter((item) => !item.status));
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
        <div className="flex gap-2 mb-4">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-xs px-3 py-1 rounded-full font-medium capitalize transition-all duration-200 ${filter === f ? "bg-white text-purple-600" : "text-white/70 hover:text-white"}`}
            >
              {f}
            </button>
          ))}
        </div>
        <TodoInput
          inputValue={inputValue}
          handleInput={handleInput}
          addItem={addItem}
        />
        <TodoList
          items={handleFiltering()}
          deleteItem={deleteItem}
          toggleComplete={toggleComplete}
        />
        <button
          onClick={clearCompleted}
          className="text-xs text-white/60 hover:text-white underline transition-all duration-200"
        >
          Clear Completed
        </button>
        <p className="text-right text-white/70 text-sm mt-4">
          {items.filter((item) => item.status === true).length} of{" "}
          {items.length} completed
        </p>
      </div>
    </div>
  );
};
