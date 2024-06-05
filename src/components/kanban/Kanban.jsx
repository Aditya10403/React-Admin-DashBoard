import React, { useState } from "react";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import { useContext } from "react";
import { Context } from "../../context/contextApi";

export default function Kanban() {
  //   const { KanbanData, setKanbanData } = useContext(Context);
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
                title: "Daraz clone",
                desc: "Clone full-stack daraz web-ecommerce store",
              },
              {
                id: "task-1.2",
                title: "Update Portfolio",
                desc: "Adding nice animations to developer portfolio",
              },
            ],
          },
          {
            id: "col-2",
            column: "In Progress",
            tasks: [
              {
                id: "task-2.1",
                title: "Testing the Web App",
                desc: "Adding unit tests to the backend APIs",
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

  const handleDragF = (results) => {
    const { source, destination } = results;
    console.log(source, destination);

    // If the destinations are weird
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    // Finding indexes of tasks array (in columns)
    const sourceTasksIndex = KanbanData.findIndex(
      (col) => col.id === source.droppableId
    );
    const destinationTasksIndex = KanbanData.findIndex(
      (col) => col.id === destination.droppableId
    );

    // Finding tasks from their indexes
    const sourceTasks = JSON.parse(
      JSON.stringify(KanbanData[sourceTasksIndex].tasks)
    );
    const destinationTasks = JSON.parse(
      JSON.stringify(KanbanData[destinationTasksIndex].tasks)
    );

    // Removing the source task
    const removedTask = sourceTasks.splice(source.index, 1)[0];

    // Adding the removed task into destined tasks array
    destinationTasks.splice(destination.index, 0, removedTask);

    setKanbanData((prevArray) => {
      const newArray = [...prevArray];
      // replacing the original tasks with original ones
      newArray[sourceTasksIndex].tasks = sourceTasks;
      newArray[destinationTasksIndex].tasks = destinationTasks;
      return newArray;
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragF}>
      <div className="py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {KanbanData.map((col) => {
          return (
            <Column
              key={col.id}
              tasks={col.tasks}
              id={col.id}
              title={col.column}
            />
          );
        })}
      </div>
    </DragDropContext>
  );
}
