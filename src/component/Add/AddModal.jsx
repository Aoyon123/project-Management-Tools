import { useState } from "react";

export default function AddModal({onSave}) {
  const [task, setTask] = useState({
    id: crypto.randomUUID(),
    taskName: "",
    description: "",
    dueDate: "",
    category: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setTask({
      ...task,
      [name]: value,
    });
  };

  return (
  <>
   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl p-6">
        <h2 className="mb-6 text-2xl font-bold text-green-400">Create Task</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="taskName"
              className="mb-1 block text-sm font-medium text-gray-300"
            >
              Task Name
            </label>
            <input
              type="text"
              id="taskName"
              name="taskName"
              value={task.taskName}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="mb-1 block text-sm font-medium text-gray-300"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={task.description}
              onChange={handleChange}
              rows="3"
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="dueDate"
              className="mb-1 block text-sm font-medium text-gray-300"
            >
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="category"
              className="mb-1 block text-sm font-medium text-gray-300"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={task.category}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="todo">To-Do</option>
              <option value="inprogress">On Progress</option>
              <option value="done">Done</option>
              <option value="revised">Revised</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={()=>onSave(task)}
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  </> 
  );
}
