import AuthenticateServiceAPI from '../api/authenticateServiceAPI';


const initLogin = async (username, password) => {
    return new AuthenticateServiceAPI().getAllArticle({username, password})
        .then(res => {
            if(res && res.token) {
                const {token, username, roles} = res;
                localStorage.setItem('auth', token);
                localStorage.setItem('username', username);
                localStorage.setItem('roles', roles);
                return roles;
            }
            return false;
        });
}

const logOut = () => {
    localStorage.clear();
    sessionStorage.clear();
}


export {logOut, initLogin};
