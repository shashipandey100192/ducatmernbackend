
import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';


function Detailspage() {
    const {id}=useParams();

    const [singledata, setdatafunc]=useState({})
        useEffect(()=>{
            singlerecord();
    },[])
    
    
    
    const singlerecord = ()=>
    {
        fetch(`http://localhost:7900/single/${id}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setdatafunc(data);
    
            });
    }
    

  return (
    <div className='container mt-3'>
        
        <div className='row border shadow bg-light p-3'>
            <div className='col-9'>
                <h3>View details page </h3>
            </div>
            <div className='col-3 text-end'>
                <Link to="/dashboard" className='btn btn-sm btn-success'>Back</Link>
            </div>
            <div className='col-md-6 p-3 border text-center'> 
                <h1>Profile Pictures</h1>
                <img src={singledata.profile} width="300" height={400}/>
            </div>
            <div className='col-md-6 p-3 border'>
            <p>Mongodb Id: {singledata._id}</p> 
                  <p>User Email id:  {singledata.email}</p> 
                  <p>User Phone No: {singledata.phone}</p> 
                  <p>User Gender: {singledata.gender}</p>  
                  <p>User DOB: {singledata.dob}</p>
                  <p>User password: {singledata.pass}</p> 
            </div>
        </div>
    </div>
    
  )
}

export default Detailspage