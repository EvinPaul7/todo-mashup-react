import { useDispatch } from "react-redux";
import { deleteToDo, toggleCompletion } from "../store/todoSlice";

function Listitem(props){



    var dispatch=useDispatch(); 
    return(
        <div className="col-md-4 offset-md-4">
            <div className="list-group-item" style={{margin:"10px"}}>
                <button style={{float:"right"}} onClick={()=> dispatch(deleteToDo(props.item.id))}>
                    <i className="fas fa-trash"></i>
                </button>
                <input 
                defaultChecked={props.item.completed}
                type="checkbox" 
                style={{float:"left", margin:"5px"}}
                onChange={()=>{dispatch(toggleCompletion(props.item.id))}}
                >    
                </input>
                <h6
                    style={props.item.completed?{textDecoration:"line-through"}:{marginLeft:"20px"}}>
                    <b>{props.item.title}</b>
                </h6>
            </div>
        </div>
    );
}

export default Listitem;

