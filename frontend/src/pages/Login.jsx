import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../redux/authAction'

export default function Login() {
    const dispatch = useDispatch()
    const [userData, setuserData] = useState({
        email: "kate@gmail.com",
        password: "123"
    })
    const handelLogin = () => {
        dispatch(userLogin(userData))
    }

    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div className="card">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <div>
                            <label for="email" className="form-label">First Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Enter Your Email"
                                value={userData.email}
                                onChange={e => setuserData({ ...userData, email: e.target.value })}
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a username.</div>
                        </div>
                        <div className="mt-2">
                            <label for="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter Your Password"
                                value={userData.password}
                                onChange={e => setuserData({ ...userData, password: e.target.value })}
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please choose a username.</div>
                        </div>
                        <button type="button"
                            onClick={handelLogin}
                            className="btn btn-primary w-100 mt-3">
                            Login
                        </button>
                        <p className="text-center mt-3">
                            Dont Have Account? <a href="#">Create Account</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
