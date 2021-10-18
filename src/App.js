import ToDoList from "./ToDoList";
import React, { useState, useEffect } from 'react';
import Data from "./mockData.json";
import Header from "./Header";
import ActionPanel from "./ActionPanel";

function App() {

  const [toDoList, setToDoList] = useState(Data);
  const [userInput, setUserInput] = useState('');
  const [getLength, setLength] = useState('');
  const [filter, setFilterFlag] = useState(false);
  const [filterList, setFilterList] = useState('');
  const [flagCheck, setflagCheckAll] = useState(false);

  useEffect(() => {
    setLength(filter ? filterList.length : toDoList.length)
  },[])

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
  }

  const onRemove = (id) => {
    console.log(id)
    let mapped = toDoList.filter(item => item.id !== Number(id))
    setToDoList(mapped);
  }

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask(userInput)
      setUserInput('')
    }
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  const getAll = () => {
    setToDoList(toDoList);
    setFilterFlag(false);
  }

  const getActive = () => {
    let mapped = toDoList.filter(item => item.complete === false);
    setFilterList(mapped);
    setFilterFlag(true);
  }

  const getClear = () => {
    let mapped = toDoList.filter(item => item.complete !== true);
    setToDoList(mapped);
    setFilterList(mapped);
  }

  const getComplete = () => {
    let mapped = toDoList.filter(item => item.complete === true);
    setFilterList(mapped);
    setFilterFlag(true);
  }

  const handleCheck = () => {
    if (flagCheck) {
      setflagCheckAll(false);
    } else {
      setflagCheckAll(true);
    }
    console.log(flagCheck);
  }

  return (
    <div className="App">
      <Header />
      <div id="main">
        <input value={userInput} type="text" onChange={handleChange} onKeyPress={handleKeyPress} placeholder="Enter task..." className="inputText" />
        <input type="checkbox" onClick={handleCheck} id="eye" className="eye" />
      </div>
      <ToDoList toDoList={filter ? filterList : toDoList} handleToggle={handleToggle} onRemove={onRemove} handleCheck={flagCheck} />
      <ActionPanel handleAll={getAll} hanldeActive={getActive} hanldeClear={getClear} hanldeCompleted={getComplete} count={getLength} />
    </div>
  );
}

export default App;
