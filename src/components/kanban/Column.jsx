import React, { useEffect, useState } from "react";
import Task from "./Task";
// import { Droppable } from "react-beautiful-dnd";
import { Droppable } from "@hello-pangea/dnd";
import { useContext } from "react";
import { Context } from "../../context/contextApi";
import { data } from "autoprefixer";

export default function Column({ tasks, id, title }) {
  const [KanbanData, setKanbanData] = useState(
    localStorage.getItem("kanban")
      ? JSON.parse(localStorage.getItem("kanban"))
      : [
          {
            id: "col-1",
            column: "To-do",
            tasks: [
              {
                id: "task-1.1",
                title: "E-commerce",
                desc: "A full stack MERN app",
              },
              {
                id: "task-1.2",
                title: "File Transfer App",
                desc: "ReactJS file transfer app using socket.io",
              },
            ],
          },
          {
            id: "col-2",
            column: "In Progress",
            tasks: [
              {
                id: "task-2.1",
                title: "Admin Dashboard",
                desc: "ReactJs Admin dashboard with tailwind css",
              },
            ],
          },
          {
            id: "col-3",
            column: "In Review",
            tasks: [],
          },
          {
            id: "col-4",
            column: "Completed",
            tasks: [],
          },
        ]
  );
  useEffect(() => {
    console.log(title);
    console.log(id);
    console.log(tasks);
  }, []);

  const getClass = (title) => {
    switch (title) {
      case "To-do":
        return "bg-red-600";
        break;
      case "In Progress":
        return "bg-blue-600";
        break;
      case "Completed":
        return "bg-green-600";
        break;

      default:
        return "bg-orange-600";
        break;
    }
  };
  //   const { KanbanData, setKanbanData } = useContext(Context);

  const addTask = () => {
    const columnToUpdate = JSON.parse(
      JSON.stringify(KanbanData.filter((col) => col.id === id)[0])
    );

    const columnToUpdateIndex = KanbanData.findIndex((column) => {
      return column.id === id;
    });

    columnToUpdate.tasks.push({
      id: "unique",
      title: "Title goes here",
      desc: "Description here",
      new: true,
    });

    // updating the Kanban Data with addition of new task
    setKanbanData((prevArray) => {
      const newArray = [...prevArray];
      newArray[columnToUpdateIndex] = columnToUpdate;
      return newArray;
    });
  };

  return (
    <div className="flex flex-col">
      <div
        className={`tag overflow-hidden ${getClass(
          title
        )}  rounded-t-xl py-2 text-xl text-white font-semibold text-center`}
      >
        {title}
      </div>

      <Droppable droppableId={id} type="group">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`${
              snapshot.isDraggingOver ? "bg-slate-200" : ""
            } rounded-b-xl justify-between inline-flex flex-col flex-shrink-0 bg-gray-200 space-y-2 pb-2 h-min `}
          >
            <div className="tasks relative space-y-3 px-3 py-3">
              {tasks.map((task, idx) => {
                return (
                  <Task
                    column_id={id}
                    isNew={task.new}
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    desc={task.desc}
                    index={idx}
                  />
                );
              })}

              {provided.placeholder}
            </div>

            <div
              onClick={addTask}
              className="add text-center rounded-md w-11/12 bg-slate-300 hover:bg-slate-400 cursor-pointer my-2 mx-auto py-1 text-3xl font-semibold px-2"
            >
              +
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
}
