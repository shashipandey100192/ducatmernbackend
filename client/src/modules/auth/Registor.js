import React, { useState } from 'react';
import { Link } from 'react-router-dom';




function Registor() {
    const [user ,setusers]=useState({
        email:'',
        phone:'',
        dob:'',
        gender:'',
        pass:''
    });

    const setdata = (e)=>{
        console.log(e.target.value);
        const {name,value} = e.target;
        setusers((preval)=>{
          return{
            ...preval,
            [name]:value
          }
        })
      }


const mysubmit = async ()=>{
  
    const {phone,gender,pass,dob,email} = user;
    const res = await fetch("http://localhost:7900/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            phone,gender,pass,dob,email
        })
    })
    const data = await res.json();
    console.log(data);
}


    return (
        <div className='container mt-5'>
            <div className='row justify-content-md-center'>
                <div className='col-5'>

                    <form className='border p-5 bg-dark shadow text-white' >
                        <h1 className='text-center'>User Registor Page</h1>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" value={user.email} onChange={setdata}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone No</label>
                            <input type="text" className="form-control" name="phone" value={user.phone} onChange={setdata}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Dob</label>
                            <input type="date" className="form-control" name='dob' value={user.dob} onChange={setdata}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gender</label><br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="male" name="gender" onChange={setdata}/>
                                <label className="form-check-label">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="female" name="gender" onChange={setdata}/>
                                <label className="form-check-label">Female</label>
                            </div>

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="text" className="form-control" name='pass' value={user.pass} onChange={setdata}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={mysubmit}>Registor Now</button>
                        <Link type="submit" className="btn btn-outline-warning ms-3" to="dashboard">dashboard</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registor