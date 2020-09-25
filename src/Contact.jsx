import React, { useState } from 'react';

const Contact = () => {
  const [data,setData] = useState({
    fullName:'',
    phone:'',
    email:'',
    msg:'',
  })

const  inputEvent = (event) =>{
  const {name,value} = event.target;
  setData((preVal)=>{
    return {
      ...preVal,[name]:value,
    }
  })
}

const fromSubmit = (e) =>{
  e.preventDefault();
  alert(`My name is ${data.fullName} . My Mobile Number is ${data.phone} and email is ${data.email},here is what I want to say ${data.msg} `)
}
  return (
      <>
      <div className="my-5">
      <h1 className="text-center">Contact us</h1>  
      </div>

      <div className="container contact_div">
          <div className="row">
              <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={fromSubmit}>
              <div className="mb-3">
                   <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1"  name="fullName" value={data.fullName} onChange={inputEvent} placeholder="enter your name" />
              </div>
              <div className="mb-3">
                   <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter Phone Number" />
              </div>
              <div className="mb-3">
                   <label for="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" />
              </div>
             
              <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Massage</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={inputEvent}></textarea>
              </div>
              <div className="col-12">
                   <button className="btn btn-primary" type="submit">Submit form</button>
              </div>
             </form>
              </div>
          </div>
      </div>
      </>

  )
}

export default Contact;