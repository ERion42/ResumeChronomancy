import React from 'react';

function SignUp() {
    return (
        <main>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword" />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Password</label>
                    <input type="text" class="form-control" id="inputPassword" placeholder="Set a Password" />
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit" data-nlok-ref-guid="f0d97f2e-dbff-4111-a8ff-d83c69c739b4">Sign Me Up!</button>
            </form>        
        </main>
    );
}

export default SignUp;