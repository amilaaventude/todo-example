import React from 'react';
import ToDo from './ToDo';


const ToDoList = ({ toDoList, handleToggle,onRemove }) => {
    return (
        <div>
            {
                toDoList.map(todo => {
                    return (
                        <ToDo todo={todo} handleToggle={handleToggle} onRemove={onRemove}/>
                    )
                })
            }
        </div>
    );
};

export default ToDoList;