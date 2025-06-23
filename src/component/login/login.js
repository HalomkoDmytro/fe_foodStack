import React from 'react';
import FullWidthCenter from '../fullWidthCenter';
import Button from '../button';

const Login = () => {

    return (
        <FullWidthCenter>
            <div style={{minWidth: '500px'}}>
                <label className="form-label mt-4">Login</label>
                    <div className="form-floating mb-3">
                    <input className="form-control" />
                <label for="floatingInput">Name</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control"  placeholder="Password" autocomplete="off"/>
                    <label for="floatingPassword">Password</label>
                </div>
                <Button text={" OK"}  onClick={()=> {}}/>
            </div>
        </FullWidthCenter>
    )
}

export default Login;