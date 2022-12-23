import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userRegister } from '../redux/authAction'

export default function Register() {
    const dispatch = useDispatch()
    const [avatar, setAvatar] = useState()
    const [user, setUser] = useState({
        name: "ross",
        email: "ross@gmail.com",
        password: "123"
    })
    const handleRegisterUser = () => {
        const fd = new FormData()
        fd.append("name", user.name)
        fd.append("email", user.email)
        fd.append("password", user.password)
        fd.append("avatar", avatar)
        dispatch(userRegister(fd))
    }
    const handelImageChange = e => {
        setAvatar(e.target.files[0])
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Signup</div>
                        <div className="card-body">
                            <div>
                                <label for="name" className="form-label">First name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter your name"
                                    value={user.name}
                                    onChange={e => setUser({ ...user, name: e.target.value })}
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="mt-2">
                                <label for="email" className="form-label">First Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter Your Email"
                                    value={user.email}
                                    onChange={e => setUser({ ...user, email: e.target.value })}
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="mt-2">
                                <label for="password" className="form-label">Password</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter Your Password"
                                    value={user.password}
                                    onChange={e => setUser({ ...user, password: e.target.value })}
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a password.</div>
                            </div>
                            <div>
                                <label for="name" class="form-label">Choose File</label>
                                <input type="file"
                                    onChange={handelImageChange}
                                    class="form-control" id="name" placeholder="Enter Your Name" />

                            </div>
                            <button onClick={handleRegisterUser} type="button" class="btn btn-primary w-100 mt-3">
                                Signup
                            </button>
                            <p class="text-center mt-3">
                                Already Have Account? <a href="#">Login</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
