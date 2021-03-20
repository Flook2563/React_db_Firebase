import React,{useState , useEffect} from 'react';
import firebase from '../db/firebase';
import Todo from './Todo'

export default function TodoList() {

    const [todoList , setTodoList] = useState();

    useEffect(() =>{
        //components มีการ Renderครั้งแรกจะดึงข้อมูลมาจาก Firebase
        const todoRef = firebase.database().ref('Todo');

        // listen every time data change in todo ref
        
        todoRef.on('value', (snapshot)=>{
            const todos = snapshot.val();
            const todoList = [];
            //loop เอาข้อมูล
            for (let id in todos){
                todoList.push({id,...todos[id]})
            }
            //เอาค่าที่ดึงมาเก็บไว้ในตัวแปร
            setTodoList(todoList)
        })


    },[]) // [] รันครั้งแรก เท่านั้นไม่ใส่จะรันตลอด


    return (
        <div>
            {todoList 
                ? todoList.map((todo, index)=> <Todo todo={todo} key={index} /> )
                : ""}
        </div>
    )
}
