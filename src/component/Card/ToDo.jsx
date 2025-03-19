export default function ToDo({ projectTask }) {
  console.log(projectTask);
    return (
      <>
        {projectTask.length === 0 ? (
          <p className="text-white">No tasks yet!</p>
        ) : (
          projectTask.map((item) => (
            <div key={item.id} className="flex flex-col gap-2 mb-4 p-3 bg-gray-800 rounded">
              <div className="flex justify-between">
                <h4 className="font-semibold text-indigo-500">{item.taskName || item}</h4>
                <div className="flex gap-2">
                  {/* Trash Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 cursor-pointer text-zinc-300"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                  {/* Edit Icon */}
                  <svg
                    className="h-4 w-4 cursor-pointer text-zinc-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="text-sm text-zinc-200">{item.description || "No description provided"}</p>
              <p className="text-xs text-zinc-400">February 20, 2024</p>
            </div>
          ))
        )}
      </>
    );
  }
  