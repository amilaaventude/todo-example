import React from 'react';
import ToDo from './ToDo';


const ToDoList = ({ toDoList, handleToggle,onRemove,flagCheck}) => {
    return (
        <div>
            {
                toDoList.map(todo => {
                    return (
                        <ToDo todo={todo} handleToggle={handleToggle} onRemove={onRemove} flagCheck={flagCheck}/>
                    )
                })
            }
        </div>
    );
};

export default ToDoList;