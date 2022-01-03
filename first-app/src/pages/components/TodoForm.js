import React from 'react';
const TodoForm = ({addTodo}) => {
    // Input tracker
    let title;
    let date;
    return (
        <div className="input-group mb-3" style={{display:"flex" , flexWrap:"wrap"}}>
            <input style={{height:"5rem" , borderRadius:"0.5rem" , marginRight:"1rem" , width:"20rem" , marginBottom:"2rem" , fontSize:"1.5rem"}}
                type="text"
                className="form-control"
                ref={node => title = node}
                placeholder="Todo title"
                aria-label="Todo title"
            />
            <input id="date" style={{height:"5rem" , borderRadius:"0.5rem" , marginRight:"1rem" , width:"10rem" , marginBottom:"2rem" , fontSize:"1.5rem"}}
                type="date"
                className="form-control"
                ref={node => date = node}
                placeholder="Todo end date"
                aria-label="Todo end date"
            />
            <div className="input-group-append">
                <button style={{color:"white" , fontSize:"1.5rem" , height:"5rem" , borderRadius:"0.5rem" , width:"10rem" , backgroundColor:"green"}}
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => {
                        addTodo(title.value ,String(new Date().getFullYear() + ((new Date().getUTCMonth()+1) > 9 ? '-' : '-0') + (new Date().getUTCMonth()+1) + ((new Date().getDate()) > 9 ? '-' : '-0') + new Date().getDate()), date.value);
                        title.value = '';
                        date.value = ''
                    }}
                >
                    Sub
                </button>
            </div>
        </div>
    );
};
export default TodoForm;