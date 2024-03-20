import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        console.log("CHECK")
        // e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', {
                username: username,
                password: password
            });

            console.log("CHECK", response);
            // Assuming the login response contains a token
            const token = response.data.token;
            // Save the token to local storage
            localStorage.setItem('authToken', token);
            // Redirect to another page upon successful login
            // You can replace '/dashboard' with the desired route
            // window.location.href = '/';
        } catch (error) {
            console.error('Error logging in:', error);
            // Handle login error
            // For example, display an error message to the user
        }
    };

    return (
        <>
            <main>
                <div class="container">
                    <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    <div class="d-flex justify-content-center py-4">
                                        <a href="index.html" class="logo d-flex align-items-center w-auto">
                                            <img src="assets/img/logo.png" alt=""></img>
                                            <span class="d-none d-lg-block">NiceAdmin</span>
                                        </a>
                                    </div>
                                    <div class="card mb-3">
                                        <div class="card-body">
                                            <div class="pt-4 pb-2">
                                                <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                                <p class="text-center small">Enter your username & password to login</p>
                                            </div>
                                            <form class="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>
                                                <div class="col-12">
                                                    <label for="yourUsername" class="form-label">Username</label>
                                                    <div class="input-group has-validation">
                                                        <input type="text" name="username" class="form-control" id="yourUsername" value={username} onChange={(e) => setUsername(e.target.value)} required></input>
                                                        <div class="invalid-feedback">Please enter your username.</div>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <label for="yourPassword" class="form-label">Password</label>
                                                    <input type="password" name="password" class="form-control" id="yourPassword" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                                                    <div class="invalid-feedback">Please enter your password!</div>
                                                </div>
                                                <div class="col-12">
                                                    <button class="btn btn-primary w-100" type="submit">Login</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="credits">
                                        Created by <a href="https://bootstrapmade.com/">Isha Kankrecha</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Login;
