import React from 'react';
const Todo = ({todo, remove,handleGoDoing , handleGoCompletes}) => {
    // Each Todo
    return (
        <li
            className="list-group-item"
        >
            <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , marginBottom:"2rem"}}>
                <h4>{todo.title}</h4>
                <span onClick={remove(todo.id)} style={{color:"red" , fontWeight:"bold",cursor:"pointer"}}>X</span>
            </div>
            <div style={{marginBottom:"1rem"}}>start: {todo.startDate}</div>
            <div>end: {todo.endDate}</div>
            <div className={"itemButtons"}>
                <div className={"bg-btn"} onClick={handleGoDoing(todo.id)}><i className="bi bi-dash"></i></div>
                <div className={"bg-btn"} onClick={handleGoDoing(todo.id)}><i className="bi bi-info-circle"></i></div>
                <div className={"bg-btn"} onClick={handleGoCompletes(todo.id)}><i className="bi bi-check"></i></div>
            </div>
        </li>
    );
};
export default Todo;