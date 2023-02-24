import Listitem from "./Listitem";
import { useSelector } from "react-redux";

function Listcontainer (props){
    var todos=useSelector(value =>{
        return value.todos})
    return(
    <div className="col-md-12">

        {todos.map(value=>{
            return <Listitem 
                    item={value}
                    key={value.id}
                    />
        })}
    </div>
)
}

export default Listcontainer;