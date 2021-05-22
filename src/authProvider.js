import decodeJwt from 'jwt-decode';
const { REACT_APP_LOGIN, REACT_APP_DEV_API_URL,REACT_APP_STAGE_API_URL,REACT_APP_PROD_API_URL, REACT_APP_ENV } = process.env;

var API_URL;
 if( REACT_APP_ENV === 'production') {
    API_URL = REACT_APP_PROD_API_URL;
 }else if(REACT_APP_ENV === 'stage'){
    API_URL = REACT_APP_STAGE_API_URL;
 }else{
    API_URL = REACT_APP_DEV_API_URL;
 }

const authProvider = {
    login: ({ username, password }) =>  {
        const request = new Request(
            API_URL+'/project-requests/auth/authenticate', 
            {
            method: 'POST',
            body: JSON.stringify({ "userName": username, "password": password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    return Promise.reject();
                }
                return response.json();
            })
            .then(auth => {
                var authreponse = JSON.stringify(auth);
                localStorage.setItem('auth', authreponse);
                const { jwtToken } = JSON.parse(authreponse);
                const decodedToken = decodeJwt(jwtToken);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('permissions', decodedToken.roles[0]['authority']);
            })
            .catch(() => {
                return Promise.reject();
            });
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            localStorage.removeItem('token');
            localStorage.removeItem('permissions');
            // return Promise.reject({ redirectTo: '/credentials-required' });
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    checkAuth: () => localStorage.getItem('auth')
        ? Promise.resolve()
        : Promise.reject({ message: 'login.required' }),
    logout: () => {
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    getIdentity: () => Promise.resolve(),
    // authorization
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    },
};

export default authProvider;
