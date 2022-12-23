import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" href="#">Authentication</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link" to="/">Home</Link>
                        <Link class="nav-link" to="/register">Register</Link>
                        <Link class="nav-link" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>

}
