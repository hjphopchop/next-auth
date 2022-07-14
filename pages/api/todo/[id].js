import { todos } from "../../../todos";

export default function todoHandler(req, res) {
  const { query } = req;
  const { id } = query;
  const filtered = todos.filter((todo) => todo.id === id);

  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `todo with id: ${id} не существует` });
}
