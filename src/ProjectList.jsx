import { useState } from "react";
import AddModal from "./component/Add/AddModal";
import ToDo from "./component/Card/ToDo";
import OnProgress from "./component/Card/OnProgress";
export default function ProjectList() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [projectTask,setProjectTask] = useState([]);

  function handleAddModal() {
    setShowAddModal(true);
  }

  function handleAddTask(task){
     console.log(task);
     setProjectTask([...projectTask,task]);
     setShowAddModal(false);
  }


  return (
    <>
      {showAddModal && <AddModal onSave={handleAddTask}/>}
      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Projectify</h2>
          <div className="flex space-x-2">
            <button
              className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
              onClick={() => handleAddModal()}
            >
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
                className="mr-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                <path d="M15 12h-6" />
                <path d="M12 9v6" />
              </svg>
              Add
            </button>
          </div>
        </div>

        <div className="-mx-2 mb-6 flex flex-wrap">
          <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
            <div className="rounded-lg bg-indigo-600 p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">To-Do (45)</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 6l9 0" />
                  <path d="M4 12l7 0" />
                  <path d="M4 18l7 0" />
                  <path d="M15 15l3 3l3 -3" />
                  <path d="M18 6l0 12" />
                </svg>
              </div>
              <div>
                <div className="mb-4 rounded-lg bg-gray-800 p-4">
                <ToDo projectTask={projectTask} />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
            <div className="rounded-lg bg-yellow-500 p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">On Progress (45)</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 6l9 0" />
                  <path d="M4 12l7 0" />
                  <path d="M4 18l7 0" />
                  <path d="M15 15l3 3l3 -3" />
                  <path d="M18 6l0 12" />
                </svg>
              </div>

             <OnProgress projectTask={projectTask}/>
            </div>
          </div>

          <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
            <div className="rounded-lg bg-teal-500 p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Done (1)</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 6l9 0" />
                  <path d="M4 12l7 0" />
                  <path d="M4 18l7 0" />
                  <path d="M15 15l3 3l3 -3" />
                  <path d="M18 6l0 12" />
                </svg>
              </div>

              <div>
                <div className="mb-4 rounded-lg bg-gray-800 p-4">
                  <div className="flex justify-between">
                    <h4 className="mb-2 font-semibold text-teal-500">
                      Content Writer
                    </h4>
                    <div className="flex gap-2">
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
                  <p className="mb-2 text-sm text-zinc-200">
                    Make Promotional Ads for Instagram fasto's
                  </p>

                  <p className="mt-6 text-xs text-zinc-400">
                    February 20, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
            <div className="rounded-lg bg-rose-500 p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Revise (1)</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 6l9 0" />
                  <path d="M4 12l7 0" />
                  <path d="M4 18l7 0" />
                  <path d="M15 15l3 3l3 -3" />
                  <path d="M18 6l0 12" />
                </svg>
              </div>
              <div className="mb-4 rounded-lg bg-gray-800 p-4">
                <div className="flex justify-between">
                  <h4 className="mb-2 font-semibold text-rose-500">
                    Content Writer
                  </h4>
                  <div className="flex gap-2">
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
                <p className="mb-2 text-sm text-zinc-200">
                  Make Promotional Ads for Instagram fastos
                </p>

                <p className="mt-6 text-xs text-zinc-400">February 20, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
