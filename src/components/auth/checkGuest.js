import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export const checkGuest=(Component)=>{

    function Wrapper(props){
        var navigate=useNavigate();
        var user=useSelector(store=>store.auth.user);

        useEffect(()=>{
            if(user){
                navigate('/');
            }
        },[user])
        return <Component {...props}/>

    }
        
        return Wrapper;

    
}

export default checkGuest;
