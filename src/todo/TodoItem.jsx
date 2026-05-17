export const TodoItem = ({ item, deleteItem, toggleComplete }) => {
  return (
    <li
      className="flex items-center justify-between p-3 mb-2 rounded-lg"
      style={{
        background: "rgba(255,255,255,0.15)",
        border: "1px solid rgba(255,255,255,0.25)",
      }}
    >
      <span
        className={`text-sm flex-1 ${item.status ? "line-through text-white/40" : "text-white"}`}
      >
        {item.text}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => toggleComplete(item.id)}
          className={`text-xs px-3 py-1 rounded-full font-medium transition-all duration-200 ${item.status ? "bg-gray-200 text-gray-600 hover:bg-gray-300" : "bg-green-100 text-green-700 hover:bg-green-200"}`}
        >
          {item.status ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => deleteItem(item.id)}
          className="text-xs px-3 py-1 rounded-full font-medium bg-red-100 text-red-600 hover:bg-red-200 transition-all duration-200"
        >
          Delete
        </button>
      </div>
    </li>
  );
};
