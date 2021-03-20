import React from 'react';
import firebase from '../db/firebase';


export default function Todo({todo}) {

    const deleteTodo = () => {
        const todoref = firebase.database().ref('Todo').child(todo.id);
        todoref.remove();
    }
    const completeTodo = () => {
        const todoref = firebase.database().ref('Todo').child(todo.id);
        todoref.update({
            complete: !todo.complete
        })
    }



    return (
        <div>
            <h1 className={todo.complete ? 'complete' :''}>{todo.title}</h1>
            <button className="delete-btn" onClick={deleteTodo}>Delete</button>
            <button className="complete-btn" onClick={completeTodo}>Complete</button>
        </div>
    )
}
