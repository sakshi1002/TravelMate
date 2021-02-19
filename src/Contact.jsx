import React, { useState } from 'react';

const Contact = ()=>{

    const [data,setData] = useState({
        fullname:"",
        phone:"",
        email:""
    });
    const InputEvent=(event)=>{
        const {name ,value}= event.target;

        setData((preVal)=>{
            return{
                ...preVal,[name]:value,
            };
        })
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`Name:${data.fullname},Email:${data.email},Phone:${data.phone}`);
    }

    return(
        <>
        <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div col-md-6 col-10 mx-auto >
                    <form onSubmit={formSubmit}>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name"
                    value={data.fullname}
                    name="fullname"
                    onChange={InputEvent}/>

                    </div>

                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                        value={data.email}
                                        name="email"
                                        onChange={InputEvent}/>
                    </div>

                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Phone No."
                                        value={data.phone}
                                        name="number"
                                        onChange={InputEvent}/>
                    </div>


                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">destination You Would Like to Visit</label>
                    <textarea class="form-control" id="Travel With Us!" rows="3"></textarea>
                    </div>
                    <div class="col-12">
                    <center>
                    <button class="btn btn-primary text-center" type="submit" className="sub-btn">Submit</button>
                    </center>
                    </div>
                    </form>

                </div>

            </div>

        </div>
        </>
    );

}
 
export default Contact;