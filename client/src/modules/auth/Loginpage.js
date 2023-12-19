import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Loginpage() {
    const [luser,luserdata]=useState({})
    const [user ,setusers]=useState({
        email:'',
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

      const mylogin = async (e) => {
        e.preventDefault();
        const { email, pass } = user;
    
        const mydata = await fetch("http://localhost:7900/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email, pass
          })
        })
        const res = await mydata.json();
        console.log(res);
        if(res.status===201)
        {
            alert("welcome to login");
            window.location.href="/dashabord";
        }else if(res.status===422)
        {
            alert("password not match");
        }
        else{
          console.log("nothing");
        }
        if (res.status === 201) {
          localStorage.setItem("userdatatoken", res.result.token);
          localStorage.setItem("userinfo", JSON.stringify(res.result.uservalidation));
          luserdata(res.result.uservalidation)
          setusers({ ...user, email: "", pass: "" });
            
        }
      }




    return (
        <div className='container mt-5'>
            <div className='row justify-content-md-center'>
                <div className='col-5'>
                       
                    <form className='border p-5 bg-light shadow'> 
                    <h1 className='text-center'>Login page</h1>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" value={user.email} onChange={setdata}/> 
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="text" className="form-control" name="pass" value={user.pass} onChange={setdata}/> 
                        </div>
                        <button type="button" className="btn btn-primary" onClick={mylogin}>Login</button>
                        {/* <Link type="submit" className="btn" to="dashboard">dashboard</Link> */}
                        <Link type="submit" className="btn" to="registor">New Registor</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Loginpage