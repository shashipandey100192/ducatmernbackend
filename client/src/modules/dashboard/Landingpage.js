import React, { useEffect, useState } from 'react';


function Landingpage() {
const [mydata, setdatafunc]=useState([])
    useEffect(()=>{
    fetch('http://localhost:7900/getalldata')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setdatafunc(data);
        })   
},[])
    
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className="card text-bg-success mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card text-bg-info mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card text-bg-warning mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card text-bg-danger mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <table className="table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th scope="col">s.no</th>
                                <th scope="col">mongodbid</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mydata.map((d,s)=>{
                                return(
                                    <tr key={s}>
                                <th scope="row">{++s}</th>
                                <td>{d._id}</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td className='text-end'>
                                    <button className='btn btn-danger btn-sm'>Del</button>
                                    <button className='btn btn-info btn-sm ms-2'>Edit</button>
                                    <button className='btn btn-warning btn-sm ms-2'>View</button>
                                </td>
                            </tr>
                                )
                            })}
                            
                            
                           
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Landingpage