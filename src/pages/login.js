import React, { useState } from 'react';
import {useEffect} from 'react'
import EmployeeService from '../apputils/services/EmployeeService';

function LogIn(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleEmailChange(e){
        setEmail(e.target.value)
    }

    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

    function handleLogIn(){
        EmployeeService.verifyLogin(email, password).then((res) => {
            let verified = res.data
            if(verified)
                alert("Logging you in")
            else
                alert("Incorrect username or password")
        })
    }

    useEffect(() =>{
        document.title = "Log in To ERP Model"
    })

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
                    background: "hsla(0, 0%, 100%, 0.5)",
                    backdropFilter: "blur(30px)"
                }}>
                    <div className="card-body py-5 px-md-5">

                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="fw-bold mb-5">Log In</h2>
                                <form>
                                    {/* <!-- Email input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form3Example3" className="form-control" value={email} onChange={handleEmailChange} />
                                        <label className="form-label" for="form3Example3">Email address</label>
                                    </div>

                                    {/* <!-- Password input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="password" id="form3Example4" className="form-control" value={password} onChange={handlePasswordChange}/>
                                        <label className="form-label" for="form3Example4">Password</label>
                                    </div>

                                    {/* <!-- Submit button --> */}
                                    <button type="button" onClick={handleLogIn} className="btn btn-primary btn-block mb-4">
                                        Log in
                                    </button>
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

export default LogIn;  