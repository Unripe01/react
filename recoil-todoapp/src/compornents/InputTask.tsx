import React, { useCallback } from "react";
import "./InputTask.css";
import { inputTitleState } from "../states/inputTitleState";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { AddTitleState } from "../states/addTitleState";

const getKey = () => Math.random().toString(32).substring(2);

const InputTask = () => {
  const [inputTitle, setInputTitle] = useRecoilState(inputTitleState);
  // const inputTitle = useRecoilValue(inputTitleState);
  // const setInputTitle = useSetRecoilState(inputTitleState)
  const [addTitle, setAddTitle] = useRecoilState(AddTitleState);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value);
      // console.log(inputTitle);
    },
    [inputTitle]
  );

  const handleClick = () => {
    setAddTitle([...addTitle, { id: getKey(), title: inputTitle }]);
    setInputTitle("")
    console.log(addTitle);
  };

  return (
    <div className="inputField">
      <input type="text" className="inputTitle" onChange={onChange} value={inputTitle}/>
      <button type="button" className="addButton" onClick={handleClick}>
        追加
      </button>
    </div>
  );
};

export default InputTask