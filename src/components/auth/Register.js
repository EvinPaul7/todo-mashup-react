import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Register(){
    var [name,setName]=useState('');
    var [email,setEmail]=useState('');
    var[password,setPassword]=useState('');
    var[passconf,setPassconf]=useState('');
    var[errorMessage,setErrorMessage]=useState('')
    var navigate= useNavigate();

    function registerUser(){
        var user={
            name:name,
            email:email,
            password:password,
            password_confirmation:passconf
        }
        axios.post('https://demo-blog.mashupstack.com/api/register',user).then(response=>{
            setErrorMessage('');
            navigate('/login');
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(''));
            }
            else{
                setErrorMessage('Failed to connect to API')
            }
        })
    }

    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div col-8>
                        <h1>Register User</h1>
                        {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
                        <div className="form-group">
                            <label>Name:</label>
                            <input type='text' className="form-control" value={name} onInput={(event=>{setName(event.target.value)})} ></input>
                        </div>
                        <div className="form-group">
                            <label>Email Id:</label>
                        <input type='text' className="form-control" value={email} onInput={(event =>{setEmail(event.target.value)})} ></input>
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type='password' className="form-control" value={password} onInput={(event=>{setPassword(event.target.value)})} ></input>
                        </div>
                        <div className="form-group">
                            <label>Confirm Password:</label>
                            <input type='password' className="form-control" value={passconf} onInput={(event=>{setPassconf(event.target.value)})} ></input>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary float-right" onClick={registerUser}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;

