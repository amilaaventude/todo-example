import React from 'react';


const Panel = ({count,handleAll,hanldeActive,hanldeCompleted,hanldeClear }) => {

    const handleAllTasks = (e) => {
        handleAll();
    }

    const hanldeActiveTasks = (e) => {
        hanldeActive();
    }

    const hanldeCompletedTasks = (e) => {
        hanldeCompleted();
    }

    const hanldeClearTasks = (e) => {
        hanldeClear();
    }

    return (
        <div >
            <div style={{ color: 'red', fontWeight: 'bold' }} >
                <div className="actionInside">
                    <line>
                        <label className="line">{count} items left </label>
                        <button className="line" type="button" onClick={handleAllTasks}>All</button>
                        <button className="line" type="button" onClick={hanldeActiveTasks}>Active</button>
                        <button className="line" type="button" onClick={hanldeCompletedTasks}>Completed</button>
                        <button className="line" type="button" onClick={hanldeClearTasks}>Clear Completed</button>
                    </line>
                </div>
            </div>
        </div>
    );

};

export default Panel;