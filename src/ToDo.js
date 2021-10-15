import React from 'react';


const ToDo = ({ todo, handleToggle,onRemove }) => {

    const handleClick = (e) => {
        handleToggle(e.currentTarget.id)
    }

    const hanldeRemove = (e) => {
        console.log(e.currentTarget.id)
        onRemove(e.currentTarget.id)
    }

    return (
        <div >

            <div style={{ color: 'green', fontWeight: 'bold' }} >
                <div className="eyeInside">
                    <line>
                        <div className="wrap">
                            <div className="task">
                            <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
                                <input type="checkbox" id="eye" />
                                {todo.task}
                            </div>
                            </div>
                            <div className="button">
                                <button type="button" id={todo.id} onClick={hanldeRemove}>Remove</button>
                            </div>
                        </div>
                    </line>
                </div>
            </div>


        </div>
    );

};

export default ToDo;