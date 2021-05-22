import * as React from "react";
import { fetchUtils,Admin, Resource, ListGuesser, EditGuesser , Login} from 'react-admin';
// import { Admin, Resource } from 'react-admin';

// import simpleRestProvider from 'ra-data-simple-rest';

import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserEdit, UserCreate } from "./users";
import { ProjectRequestList , ProjectRequestEdit, ProjectRequestCreate, ProjectFormCreate,ProjectFormEdit} from "./projects";
import authProvider from './authProvider';
import authProviderCas from './authProviderCas';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import backgroundimg from './PrincetonAtNight.JPG'; 
import myDataProvider from './myDataProvider.js'
import LoginForm from './LoginForm';

const { REACT_APP_LOGIN, REACT_APP_DEV_API_URL,REACT_APP_STAGE_API_URL,REACT_APP_PROD_API_URL, REACT_APP_ENV } = process.env;

var API_URL;
 if( REACT_APP_ENV === 'production') {
    API_URL = REACT_APP_PROD_API_URL;
 }else if(REACT_APP_ENV === 'stage'){
    API_URL = REACT_APP_STAGE_API_URL;
 }else{
    API_URL = REACT_APP_DEV_API_URL;
 }

 console.log(API_URL);    

const theme = createMuiTheme({
    palette: {
        primary: orange,
        secondary: orange,
    },
  });

  const MyLoginPage = () => {
      if(REACT_APP_LOGIN==="CAS"){
        return (
            <Login theme={theme}
                backgroundImage={backgroundimg}
            >
                 {<LoginForm />}
            </Login>
        )
      }else{
        return (
            <Login theme={theme}
                backgroundImage={backgroundimg}
            >
            </Login>
        )
      }
     };

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    var auth =   localStorage.getItem('auth');
    if(auth == null)
        return Promise.reject();
    const { jwtToken } = JSON.parse(localStorage.getItem('auth'));
    options.headers.set('Authorization', `Bearer ${jwtToken}`);
    return fetchUtils.fetchJson(url, options);
};

//  const dataProvider = jsonServerProvider('http://fac130l.princeton.edu:8080', httpClient);
const dataProvider = jsonServerProvider(API_URL, httpClient);
const App = () =>{
    var authProv = REACT_APP_LOGIN==="CAS"? authProviderCas: authProvider;
    return (
        <Admin theme={theme} authProvider={authProv} dataProvider={myDataProvider} loginPage={MyLoginPage}>
            {/* <Resource name="posts" list={ListGuesser} />
            <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}/> */}
            <Resource name="project-requests" list={ProjectRequestList} edit={ProjectFormEdit} create={ProjectFormCreate} />
            <Resource name="sites" />
            <Resource name="buildings" />
            <Resource name="floors" />
            <Resource name="rooms" />
        </Admin>
    )
} ;

export default App;
