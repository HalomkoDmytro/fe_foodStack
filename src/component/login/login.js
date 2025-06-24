import React, {useState} from 'react';
import FullWidthCenter from '../fullWidthCenter';
import Button from '../button';
import {initLogin} from '../../service/loginService';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit  = () => {
        initLogin(username, password).then(res => {
            if(res) {
                navigate("/home")
            } else {
                setError(true);
            }
        })
    }

    return (
        <FullWidthCenter>
            <div style={{minWidth: '500px'}}>
                <label className="form-label mt-4">Login</label>
                    <div className="form-floating mb-3">
                    <input className="form-control" value={username} onChange={(e) => setName(e.target.value)}/>
                <label for="floatingInput">Name</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control"  placeholder="Password" value={password}
                        autocomplete="off" onChange={(e) => setPassword(e.target.value)}/>
                    <label for="floatingPassword">Password</label>
                </div>
                <Button text={"Login"}  onClick={handleSubmit}/>
                {error && <div>error happend</div>}
            </div>
        </FullWidthCenter>
    )
}

export default Login;