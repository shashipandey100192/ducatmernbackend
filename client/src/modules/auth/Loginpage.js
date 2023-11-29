import React from 'react';
import {Link} from 'react-router-dom';

function Loginpage() {
    return (
        <div className='container mt-5'>
            <div className='row justify-content-md-center'>
                <div className='col-5'>
                       
                    <form className='border p-5 bg-light shadow'> 
                    <h1 className='text-center'>Login page</h1>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control"/> 
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone No</label>
                            <input type="text" className="form-control"/> 
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="text" className="form-control"/> 
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link type="submit" className="btn" to="dashboard">dashboard</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Loginpage