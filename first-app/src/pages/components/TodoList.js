import React from 'react';
import Todo from './Todo';
import 'assets/style.css'
const TodoList = ({todos, remove , doings , doingList , completes , completeList}) => {
    const taskNode = todos.map((todo) => {
        return (
            <Todo todo={todo} key={todo.id} remove={remove} handleGoDoing={doings} handleGoCompletes={completes} />
        );
    });
    const doingNode = doingList.map((todo) => {
        return (
            <Todo todo={todo} key={todo.id} remove={remove} handleGoDoing={doings} handleGoCompletes={completes} />
        );
    });
    const completedNode = completeList.map((todo) => {
        return (
            <Todo todo={todo} key={todo.id} remove={remove} handleGoDoing={doings} handleGoCompletes={completes} />
        );
    });
    return (
        <>
            <main>
                <div className={"tasks"}>
                    <h2>Tasks</h2>
                    <ul
                        className="list-group"
                    >
                        {taskNode}
                    </ul>
                </div>
                <div className={"doing"}>
                    <h2>Doing</h2>
                    <ul
                        className="list-group"
                    >
                        {doingNode}
                    </ul>
                </div>
                <div className={"completed"}>
                    <h2>Completed</h2>
                    <ul
                        className="list-group"
                    >
                        {completedNode}
                    </ul>
                </div>
            </main>
        </>
    );
};
export default TodoList;