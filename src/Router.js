import {createBrowserRouter} from "react-router-dom";
import Aboutus from './components/Aboutus.js'
import App from './App';
import Greetings from "./components/Greetings.js";
import ListPosts from "./components/blog/ListPosts.js"
import CreatePosts from "./components/blog/CreatePosts.js";
import ViewPost from "./components/blog/ViewPost.js";
import EditPost from "./components/blog/EditPost.js";
import Register from "./components/auth/Register.js";
import Login from './components/auth/Login.js';

const Router= createBrowserRouter([
    {path: '', element:<App/>},
    {path:'aboutus', element:<Aboutus/>},
    {path:"greeting/:name", element:<Greetings/>},
    {path:'blog/posts', element:<ListPosts/>},
    {path:'blog/posts/create', element:<CreatePosts/>},
    {path:'/blog/posts/:postId', element:<ViewPost/>},
    {path:'/blog/posts/:postId/edit',element:<EditPost/>},
    {path:'/register',element:<Register/>},
    {path: '/login', element:<Login/>}
])

export default Router;