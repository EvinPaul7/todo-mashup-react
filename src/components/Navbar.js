import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import {removeUser} from '../store/authSlice.js'


function Navbar() {
    var user=useSelector(store=>store.auth.user);
    var dispatch=useDispatch();
    var navigate=useNavigate();
  
    function logout(){
        if(user){
            axios.post('https://demo-blog.mashupstack.com/api/logout',{},{
               headers:{'Authorization':"Bearer "+ user.token}
            });
            dispatch(removeUser());
            navigate('/login');
        }
    }
 




    return <nav className="navbar navbar-expand-sm navbar-dark bg-dark" >
        <div className="navbar-brand">
            <h4>Todo List</h4>
        </div>
        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div
        className="navbar-collapse mr-auto"
        id="navbarNav"
        style={{ float: "left" }}
        >
            <ul className="navbar-nav ml-auto" style={{ color: "#ffffff", gap:'25px' }}>
                <li className="nav-item">
                <NavLink to={"/"} className={'nav-link'+(status => status.isActive ? 'active' : '')} >
                    Home
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to={"/aboutus"} className={"nav-link"+(status => status.isActive ? 'active' : '')}>
                    About us
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink 
                to={"/blog/posts"} 
                className={
                    'nav-link'+
                    (status => status.isActive ? 'active' : '')
                } 
                >
                    Blog
                </NavLink>
                </li>
                <li>
                    <NavLink to={'/register'} className={"nav-link" + (status=>status.isActive?'active':'')}>Register User</NavLink>
                </li>
        {user?  
               <li>
               <span onClick={logout}>Logout</span>
               </li>:
               <li>
                <NavLink to={'/login'} className={"Nav-link"+(status=>status.isActive?'active':'')}>Login</NavLink>
                </li>
                }
            </ul>
        </div>
    </nav>;
}

export default Navbar;