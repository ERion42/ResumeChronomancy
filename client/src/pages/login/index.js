import React, { useState, useEffect } from 'react';

// This should be the login feature
function Login() {
    return (
        <main class="container">
            <div class="form-signin">
                <form>
                    <h1 class="h3 mb-3 fw-normal">Please Sign In!</h1>
                    {/* Email input */}
                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" /><div id="norton-idsafe-field-styling-divId"></div>
                        <label for="floatingInput">Email address</label>
                    </div>
                    {/* Password Input */}
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" data-nlok-ref-guid="2c31f7c5-643b-4b93-acdb-62c45bc1afa8" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    {/* Remember Me checkbox */}
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    {/* Sign in button */}
                    <button class="w-100 btn btn-lg btn-primary" type="submit" data-nlok-ref-guid="f0d97f2e-dbff-4111-a8ff-d83c69c739b4">Sign in</button>
                </form>
            </div>


        </main>

        
    );
}

export default Login;