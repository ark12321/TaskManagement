import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Grouplogin = () => {
    const [email, setEmail] = useState();
    const [Groupname, setGroupname] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:3001/grouplogin', {email, Groupname})
        .then(result => {
            console.log(result);
            if(result.data === "Success"){
                console.log("Group Login Success");
                alert('Group Login successful!')
                navigate('/home');
            }
            else{
                alert('Incorrect Credintials! Please try again.');
            }
        })
        .catch(err => console.log(err));
    }


    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="bg-white p-3 rounded" style={{width : '40%'}}>
                    <h2 className='mb-3 text-primary'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Group Name</strong>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter GroupName"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={(event) => setGroupname(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Email</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Verify</button>
                    </form>
                    {/* TO add ' appostopee */}
                    {/* <p className='container my-2'>Don&apos;t have an account?</p>
                    <Link to='/register' className="btn btn-secondary">Register</Link> */}
                </div>
            </div>
        </div>
    )
}

export default Grouplogin