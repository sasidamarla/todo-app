import { TodoItem } from "./TodoItem";

export const TodoList = ({ items, deleteItem, toggleComplete }) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};
