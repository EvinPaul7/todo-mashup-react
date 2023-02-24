import { useEffect } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"


const checkAuth=(Component)=>{
    function Wrapper(props){
        const navigate=useNavigate();
        const user=useSelector(store=>store.auth.user)


        useEffect(()=>{
            if(!user){
                navigate('/login')
            }
        },[user])
        return <Component {...props}/>

    }
    return Wrapper;
}

export default checkAuth;