import React, { PureComponent } from 'react';
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
window.id = 0;
class TodoApp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            doings: [],
            completes: []
        };
    }
    // Lifecycle method
    componentDidMount(){
        const todos = JSON.parse(window.localStorage.getItem('todos'));
        const doings = JSON.parse(window.localStorage.getItem('doings'));
        const completes = JSON.parse(window.localStorage.getItem('completes'));
        if (todos) {
            this.setState({
                todos,
            });
        }
        if (doings) {
            this.setState({
                doings,
            });
        }
        if (completes) {
            this.setState({
                completes,
            });
        }
    }

    addTodo = (val1,val2 , val3) => {
        const todo = { title: val1, startDate:val2 , endDate:val3 , id: window.id++};
        const todos = window.localStorage.getItem('todos');
        if (todos === null) {
            const todos = [];
            todos.push(todo);
            window.localStorage.setItem('todos', JSON.stringify(todos));
        } else {
            const oldTodos = JSON.parse(todos);
            oldTodos.push(todo);

            window.localStorage.setItem('todos', JSON.stringify(oldTodos));
        }
        const newTodos = [
            ...this.state.todos,
            todo,
        ];
        this.setState({todos: newTodos});
    }

    handleRemove = (id) => () => {
        const remainder = this.state.todos.filter((todo) => {
            if(todo.id !== id) return todo;
        });
        window.localStorage.setItem('todos', JSON.stringify(remainder));
        this.setState({
            todos: remainder,
        });
        const remainderInDoings = this.state.doings.filter((todo) => {
            if(todo.id !== id) return todo;
        });
        window.localStorage.setItem('doings', JSON.stringify(remainderInDoings));
        this.setState({
            doings: remainderInDoings,
        });
        const remainderInComplete = this.state.completes.filter((todo) => {
            if(todo.id !== id) return todo;
        });
        window.localStorage.setItem('completes', JSON.stringify(remainderInComplete));
        this.setState({
            completes: remainderInComplete,
        });
    }

    handleGoDoing = (id) => () =>{
        const item = this.state.todos.filter((todo) => {
            if(todo.id === id) return todo;
        });
        if(item.length){
            if(this.state.doings.length > 0){
                window.localStorage.setItem('doings' , JSON.stringify(this.state.doings.concat(item)))
            }
            else {
                window.localStorage.setItem('doings' , JSON.stringify([item]))
            }
            this.setState({
                doings: this.state.doings.concat(item)
            });

            const remainder = this.state.todos.filter((todo) => {
                if(todo.id !== id) return todo
            });
            window.localStorage.setItem('todos', JSON.stringify(remainder));
            this.setState({
                todos: remainder
            });
        }
        else{
            const itemCompleted = this.state.completes.filter((todo) => {
                if(todo.id === id) return todo;
            });
            if(this.state.doings.length > 0){
                window.localStorage.setItem('doings' , JSON.stringify(this.state.doings.concat(itemCompleted)))
            }
            else {
                window.localStorage.setItem('doings' , JSON.stringify([itemCompleted]))
            }
            this.setState({
                doings: this.state.doings.concat(itemCompleted)
            });

            const remainderCompleted = this.state.completes.filter((todo) => {
                if(todo.id !== id) return todo;
            });
            window.localStorage.setItem('completes', JSON.stringify(remainderCompleted));
            this.setState({
                completes: remainderCompleted
            });
        }
    }

    handleGoComplete = (id) => () =>{
        const itemComplete = this.state.doings.filter((todo) => {
            if(todo.id === id) return todo;
        });
        if(this.state.completes.length > 0){
            window.localStorage.setItem('completes' , JSON.stringify(this.state.completes.concat(itemComplete)))
        }
        else {
            window.localStorage.setItem('completes' , JSON.stringify([itemComplete]))
        }
        this.setState({
            completes: this.state.completes.concat(itemComplete)
        });
        const remainder = this.state.doings.filter((todo) => {
            if(todo.id !== id) return todo;
        });
        window.localStorage.setItem('doings', JSON.stringify(remainder));
        this.setState({
            doings: remainder,
        });
    }

    render() {
        // Render JSX
        return (
            <div>
                <TodoForm addTodo={this.addTodo}/>
                <TodoList
                    todos={this.state.todos}
                    remove={this.handleRemove}
                    doings={this.handleGoDoing}
                    completes={this.handleGoComplete}
                    doingList={this.state.doings}
                    completeList={this.state.completes}

                />
            </div>
        );
    }
}
export {TodoApp};