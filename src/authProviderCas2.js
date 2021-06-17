import decodeJwt from 'jwt-decode';
import CasClient, { constant } from "react-cas-client";
const { REACT_APP_DEV_API_URL,REACT_APP_STAGE_API_URL,REACT_APP_PROD_API_URL, REACT_APP_ENV , REACT_APP_CAS_URL, REACT_APP_URL_DEV,REACT_APP_URL_STAGE, REACT_APP_URL_PROD} = process.env;

var API_URL;
 if( REACT_APP_ENV === 'production') {
    API_URL = REACT_APP_PROD_API_URL;
 }else if(REACT_APP_ENV === 'stage'){
    API_URL = REACT_APP_STAGE_API_URL;
 }else{
    API_URL = REACT_APP_DEV_API_URL;
 }

 let APP_URL;
 if( REACT_APP_ENV === 'production') {
    APP_URL = REACT_APP_URL_PROD;
 }else if(REACT_APP_ENV === 'stage'){
    APP_URL = REACT_APP_URL_STAGE;
 }else{
    APP_URL = REACT_APP_URL_DEV;
 }

let casEndpoint = REACT_APP_CAS_URL;
//let casOptions = { version: constant.CAS_VERSION_3_0, redirectUrl: APP_URL, validation_proxy_path: '/cas_proxy'};
let casOptions = { version: constant.CAS_VERSION_3_0,  validation_proxy_path: '/cas_proxy'};
 
let casClient = new CasClient(casEndpoint, casOptions);

const cleanup = () => {
    localStorage.removeItem('inprocess');
    window.history.replaceState(
        {},
        window.document.title,
        window.location.origin
    );
}

const caslogin = async () => {
//        localStorage.setItem('inprocess', true);
      let resp;
       try{ 
          resp = await casClient.auth();
       } catch(e) {
         console.log(e);
          cleanup();
//           window.location.reload();
            return;

        }
        console.log(resp);
        if (!('user' in resp)) {
            cleanup();
           window.location.reload();
            return;
//            return Promise.reject();
        }

        const request = new Request(
                    API_URL+'/project-requests/auth/cas',
                    {
                    method: 'POST',
                    body: JSON.stringify({ "userName": resp.user, "password": resp.user }),
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                });
        const response = await fetch(request);

        console.log(response);

        if (response.status < 200 || response.status >= 300) {
            cleanup();
            window.location.reload();
            return;
        //    return Promise.reject();
        }


        const auth = await response.json();
        var authreponse = JSON.stringify(auth);
        localStorage.setItem('auth', authreponse);
        const { jwtToken } = JSON.parse(authreponse);
        const decodedToken = decodeJwt(jwtToken);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('permissions', decodedToken.roles[0]['authority']);
        cleanup();
        window.location.reload();
      // return Promise.resolve();
    }

const authProviderCas2 = {
    login: async () => {
        localStorage.setItem('inprocess', true);  
        const resp = await casClient.auth();
        console.log(resp);
        if (!('user' in resp)) {
            cleanup();
            return Promise.reject();
        }

        const request = new Request(
                    API_URL+'/project-requests/auth/cas', 
                    {
                    method: 'POST',
                    body: JSON.stringify({ "userName": resp.user, "password": resp.user }),
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                });
        const response = await fetch(request);

        console.log(response);

        if (response.status < 200 || response.status >= 300) {
            cleanup();
            return Promise.reject();
        }
        

        const auth = await response.json();
        var authreponse = JSON.stringify(auth);
        localStorage.setItem('auth', authreponse);
        const { jwtToken } = JSON.parse(authreponse);
        const decodedToken = decodeJwt(jwtToken);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('permissions', decodedToken.roles[0]['authority']);
        cleanup();

       return Promise.resolve();
    } ,
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
    checkAuth:  () =>{
        if(localStorage.getItem('auth')){
            return Promise.resolve()
        }else{
            if(localStorage.getItem('inprocess')){

                let res =  caslogin();

                if(localStorage.getItem('auth')){
                       return Promise.resolve()
                 }else{
                      return Promise.reject("Please wait ...");
                 }

            }else{
          return Promise.reject();}  
        }
     //   localStorage.getItem('auth')
      //  ? Promise.resolve()
     //   : Promise.reject();
    },
    logout: () => {
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        // casClient.logout();
        return Promise.resolve();
    },
    getIdentity: () => Promise.resolve(),
    // authorization
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    },
};

export default authProviderCas2;
