import React from 'react'
import { useState, useReducer, /*useCallback*/ } from 'react'

function ToDoItem(props){
    return(
        <>
            <ul className="list-group">
                <li className="list-group-item my-1"><h5>
                <input 
                type="checkbox" 
                className='mx-3' 
                checked={props.status} 
                onChange={() => {
                    props.dispatcher({
                        type:"DONE",
                        id:props.id
                    })
                    }} />
                <span>{props.title}</span>
                </h5>
                </li>
            </ul>
        </>
    )
};

const task = [
    /*{title:'Task 1', id:1, status:false},
    {title:'Task 2', id:2, status:false},
    {title:'Task 3', id:3, status:false},
    {title:'Task 4', id:4, status:false},*/

];
export default function ToDos(props) {
    const reducer = (state, action) =>{
        console.log("This", state, action);
        if(action.type === "DONE"){
            return state.map(task => {
                if(task.id === action.id){
                    return {...task, status: !task.status}
                }
                else return task;
            });
        }
        if(action.type==='ADD_ITEM'){
            if(task.find((el) => el.id === action.id)){
                return state;
            }
            else{
                return {...task, title:action.title, id:action.id, status:false}
            }
        }
        return state;
    }
    const [taskStatus, dispatcher] = useReducer(reducer, task);
    const [inputVal, setInputVal] = useState("")

    return (
    <>
       <h1>TO-DO LIST</h1>
       <div className="input-group mb-3 ">
            <input type="text" 
            className="form-control col-2" 
            value={inputVal} 
            placeholder="Enter Task Here" 
            aria-label="Enter Task Here" 
            aria-describedby="basic-addon2" 
            onChange={(event) => {
                console.log(event.target.value);
                setInputVal(event.target.value)} } 
            />
            <button 
            className="input-group-text" id="basic-addon2"
            onClick={() => {
                dispatcher({
                    type: 'ADD_ITEM',
                    title: inputVal,
                    id: taskStatus.length+1,
                })
            }}
            >Add Item</button>
        </div>
        <select className="form-select" aria-label="Default select example">
            <option selected>All</option>
            <option value="1">Completed</option>
            <option value="2">Incompelted</option>
        </select>
        {taskStatus.map((task) => (
        <ToDoItem 
        status={task.status} 
        id={task.id}
        key={task.id} 
        title={task.title}
        dispatcher={dispatcher}
        />
        ))}
    
    </>
  )
}
