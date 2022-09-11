import React from "react";
import { useRecoilValue } from "recoil";
import { AddTitleState, addTitleStateLength } from "../states/addTitleState";
import "./AddTask.css";

function AddTask() {
  const addTitle = useRecoilValue(AddTitleState);
  const addTitleLength = useRecoilValue(addTitleStateLength)

  return (
    <div className="taskField">
      <div>{addTitleLength}個のタスクがあります</div>
      <ul>
        {addTitle.map((task) => {
          return <li key={task.id}>{task.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default AddTask;
