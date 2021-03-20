import React,{useState} from 'react';
import firebase from '../db/firebase'

export default function Form() {

    const [title , setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);  
    }

    //เชื่อมต่อกับ Firebase
    const createTodo = () => {
        const todoRef = firebase.database().ref('Todo');
        //เก็บข้อมูล
        const todo = {
            title,
            complete:false
        }
        //ข้อมูลบันทึกลงไปใน Firebase
        todoRef.push(todo)

    }

    return (
        <div>
            <input type="text" onChange={handleOnChange} value={title} />
            {/* เมื่อกดปุ่มจะสร้างtodo */}
            <button className="add-btn" onClick={createTodo}>Add Todo</button>
        </div>
    )
}
