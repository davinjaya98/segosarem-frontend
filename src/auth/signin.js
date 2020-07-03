import React, { useState } from 'react';
import logo from '../assets/images/company-logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { withRouter } from "react-router";


const Signin = ({ history }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const borderWhite = {
        borderColor: "#374558"
    }

    const loginAuth = async () => {
        try {
            let token = localStorage.getItem("AdminToken");
            let request = {
                username: username,
                password: password
            };

            if(token) {
                request["token"] = token;
            }

            fetch("/authenticate", {
                method: 'POST',
                body: JSON.stringify(request),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(res => res.json())
                .then((result) => {
                    switch(result.returnCode) {
                        case "000000":
                            localStorage.setItem("AdminToken", result.responseObject.token);
                            history.push(`${process.env.PUBLIC_URL}/dashboard`);
                            break;
                        case "222222":
                            toast.error("You have reached the maximum number of try attempt.");
                            break;
                        case "333333":
                            toast.error("Oppss.. The password or username is invalid.");
                            break;
                        default:
                            toast.error("Server Error");
                            break;
                    }
                }, (err) => {
                    toast.error("Server Error");
                });
        } catch (error) {
            toast.error("Server Error");
        }
    }

    return (
        <div>
            <div className="page-wrapper">
                <div className="container-fluid p-0">
                    {/* <!-- login page start--> */}
                    <div className="authentication-main">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="auth-innerright">
                                    <div className="authentication-box">
                                        <div className="text-center">
                                            <img src={logo} alt="" width="100%" /></div>
                                        <div className="card mt-4">
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <h4>LOGIN</h4>
                                                    <h6>Enter your Username and Password </h6>
                                                </div>
                                                <form className="theme-form" >
                                                    <div className="form-group">
                                                        <label className="col-form-label pt-0">Username</label>
                                                        <input className="form-control" type="username" name="username"
                                                            value={username}
                                                            onChange={e => setUsername(e.target.value)}
                                                            placeholder="Username"
                                                        />
                                                        {/* {errors.email && 'Email is required'} */}
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-form-label">Password</label>
                                                        <input className="form-control" type="password" name="password"
                                                            value={password}
                                                            onChange={e => setPassword(e.target.value)}
                                                            placeholder="*********" />
                                                        {/* {errors.password && 'Email is required'} */}
                                                    </div>
                                                    <div className="form-group form-row mt-3 mb-0">
                                                        <button className="btn btn-primary btn-block" type="button" onClick={() => loginAuth()} >Login</button>
                                                    </div>
                                                    <hr style={borderWhite} />
                                                </form>
                                                <div className="text-center">
                                                    <h6>Untuk bantuan silahkan hubungi kami <br /> di <a href="mailto:paparadam.interactivelab@gmail.com">Email</a> ini!</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                    {/* <!-- login page end--> */}
                </div>
            </div>
        </div>
    );
};

export default withRouter(Signin);