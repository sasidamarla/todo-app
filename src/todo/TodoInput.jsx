export const TodoInput = ({ inputValue, handleInput, addItem }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        placeholder="Add a new task..."
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={addItem}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
      >
        Add
      </button>
    </div>
  );
};
