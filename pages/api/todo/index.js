import { todos } from "../../../todos";

export default function todosHandler(_req, res) {
    return res.status(200).json(todos)
}