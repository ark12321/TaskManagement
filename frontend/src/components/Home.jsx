import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [Groupname, setGroupname] = useState();
    const [Email, setEmail] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:3001/createGroup', {Groupname,Email})
        .then(result => {
            console.log(result);
            if(result.data === "Already exists")
            {
                alert("Group already registered! Please join to proceed.");
                navigate('/grouplogin');
            }
            else
            {
                alert("Group Registered successfully! Please join to proceed.")
                navigate('/grouplogin');
            }
            
        })
        .catch(err => console.log(err));
    }


    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="bg-white p-3 rounded" style={{width : '40%'}}>
                    <h2 className='mb-3 text-primary'>Home Page</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong >Group Name</strong>
                            </label>
                            <input 
                                type="text"
                                placeholder="Enter Group Name"
                                className="form-control" 
                                id="exampleInputname" 
                                onChange={(event) => setGroupname(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong >Email</strong>
                            </label>
                            <input 
                                type="text"
                                placeholder="Enter your Email"
                                className="form-control" 
                                id="exampleInputname" 
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            /> 
                        </div>
                        <button type="submit" className="btn btn-primary">Create Group</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home



// // import React from 'react';
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
//         <h1>Login Success Page</h1>
//         <Link to='/login' className="btn btn-light my-5">Logout</Link>
//         <Link to='/login' className="btn btn-light my-5">Logout</Link>
//     </div>
//   )
// }