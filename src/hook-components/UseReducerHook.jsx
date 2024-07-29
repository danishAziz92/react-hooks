/* eslint-disable react/prop-types */
import React, { useReducer, useState } from 'react'

const TODO_ACTIONS = {
    ADD: 'add-todo',
    TOGGLE: 'toggle-todo',
    DELETE: 'delete-todo'
}

const reducer = (todos, action) => {
    switch (action.type) {
        case TODO_ACTIONS.ADD:
            return [...todos, newTodo(action.payload.content)];

        case TODO_ACTIONS.TOGGLE:
            return todos.map(todo => {
                if(todo.id === action.payload.id){
                    return {...todo, completed: !todo.completed}
                }
                return todo
            });

            case TODO_ACTIONS.DELETE:
                return todos.filter(todo => todo.id !== action.payload.id);
    
        default:
            return todos;
    }
}

const newTodo = (todoContent) => {
    return {id: Date.now(), content: todoContent, completed: false}
}

const UseReducerHook = () => {
    const [content, setContent] = useState('');
    const [todos, dispatch] = useReducer(reducer, []);

    const handleAddTodo = () => {
        console.log('New Todo', content);
        dispatch({type: TODO_ACTIONS.ADD, payload: {content}});
        setContent('');
    }

  return (
    <div>
        <input value={content} onChange={(e) => setContent(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
        {todos.map(todo => 
            <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        )}
    </div>
  )
}

const Todo = ({ todo, dispatch }) => {
    const handleStatus = () => {
        dispatch({type: TODO_ACTIONS.TOGGLE, payload: {id: todo.id}});
    }

    const handleDelete = () => {
        dispatch({type: TODO_ACTIONS.DELETE, payload: {id: todo.id}});
    }

    return(
        <div>
            <span style={{color: todo.completed ? 'green' : 'red', fontSize:'30px'}}>{todo.content}</span>
            <button onClick={handleStatus} style={{fontSize:'12px'}}>Update Status</button>
            <button onClick={handleDelete} style={{fontSize:'12px'}}>Delete</button>
        </div>
    );
}

export default UseReducerHook

/* 
useReducer: If you need to manage complex state like objects/array which have multiple ways to get updated. useReducer is a more clean and intuitive way to implement and manage local state than compared to useState
    * Purpose: Manages local state logic within a single component or a few tightly coupled components.
    * Scope: Limited to the component where it's used and potentially a few nested child components.
    * State Management: Provides a way to handle complex state logic with actions and reducers within the context of a component.
    * Setup: Minimal setup; no external libraries needed.
    * Usage: Suitable for local state management where you need more control than useState but without the overhead of a global state management solution like redux 
*/