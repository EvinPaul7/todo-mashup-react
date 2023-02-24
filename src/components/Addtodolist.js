import '../App.css';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../store/todoSlice';

function Addtodolist(props){
    var [state,setState]=useState({newTask:""});

    function handleChange(event){
        setState({newTask:event.target.value})
    }

    var dispatch= useDispatch();

    function addNewTask(event){
        event.preventDefault()
        if (state.newTask===""){
            alert("Empty value is not allowed.")
            return;
        }
        dispatch(addToDo(state.newTask));
        setState({newTask:""})
        
    }
    return(
        <div className='col-md-6 offset-md-3'>
            <form onSubmit={addNewTask}>
            <div className='form-group'>
            <label>Enter your new task:</label>
            <input value={state.newTask} type="text" onChange={handleChange}/>
            <button className='btn btn-success'>Submit</button>
            </div>
            </form>
            <h2>{state.newTask}</h2>
        </div>
    )

}

export default Addtodolist;