import React, { useState } from 'react';
import {useEffect} from 'react'
import EmployeeService from '../apputils/services/EmployeeService';

function SignUp(props) {

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    useEffect(() =>{
        document.title = "Sign Up To ERP Model"
    })

    const handleSubmit = () => {
        if(firstname == ""){
            alert("Enter First Name")
            return
        }
        else if(lastname == ""){
            alert("Enter Last Name")
            return
        }
        else if(email == ""){
            alert("Enter Email address")
            return
        }
        else if(password == "") {
            alert("Enter password")
            return
        }
        else{
            console.log({
                email:email,
                firstname:firstname,
                lastname:lastname,
                password:password
            })
            EmployeeService.create({
                email:email,
                firstname:firstname,
                lastname:lastname,
                password:password
            })
            alert("Signed up Successfully, Please Log in to Continue")
        }
    }

    return (
        <div>
            {/* <!-- Section: Design Block --> */}
            <section className="text-center">
                {/* <!-- Background image --> */}
                <div className="p-5 bg-image" style=
                    {{ backgroundImage: "url('signup-background.png')", height: "500px" }}></div>
                {/* <!-- Background image --> */}

                <div className="card mx-4 mx-md-5 shadow-5-strong" style={{
                    marginTop: "-400px",
                    background: "hsla(0, 0%, 100%, 0.8)",
                    backdropFilter: "blur(30px)"
                }}>
                    <div className="card-body py-5 px-md-5">

                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="fw-bold mb-5">Sign up now</h2>
                                <form>
                                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="form3Example1" className="form-control" value={firstname} onChange={handleFirstNameChange}/>
                                                <label className="form-label" for="form3Example1">First name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="form3Example2" className="form-control" value={lastname} onChange={handleLastNameChange} />
                                                <label className="form-label" for="form3Example2">Last name</label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Email input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form3Example3" className="form-control" value={email} onChange={handleEmailChange}/>
                                        <label className="form-label" for="form3Example3">Email address</label>
                                    </div>

                                    {/* <!-- Password input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="password" id="form3Example4" className="form-control" value={password} onChange={handlePasswordChange}/>
                                        <label className="form-label" for="form3Example4">Password</label>
                                    </div>

                                    {/* <!-- Submit button --> */}
                                    <button type="button" onClick={handleSubmit} className="btn btn-primary btn-block mb-4">
                                        Sign up
                                    </button>

                                    {/* <!-- Register buttons --> */}
                                    {/* <div className="text-center text">
                                        <p>or sign up with:</p>
                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-facebook-f"></i>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-google"></i>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-twitter"></i>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-github"></i>
                                        </button>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Section: Design Block -->             */}
        </div>
    );
}

export default SignUp;