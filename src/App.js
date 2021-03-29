import * as React from "react";
import { fetchUtils,Admin, Resource, ListGuesser, EditGuesser , Login} from 'react-admin';
// import { Admin, Resource } from 'react-admin';

// import simpleRestProvider from 'ra-data-simple-rest';

import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserEdit, UserCreate } from "./users";
import { ProjectRequestList , ProjectRequestEdit, ProjectRequestCreate, ProjectFormCreate,ProjectFormEdit} from "./projects";
import authProvider from './authProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import backgroundimg from './PrincetonAtNight.JPG'; 

const theme = createMuiTheme({
    palette: {
        primary: orange,
        secondary: orange,
    },
  });

  const MyLoginPage = () => (
    <Login theme={theme}
        // A random image that changes everyday
        backgroundImage={backgroundimg}
    />
);

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

const dataProvider = jsonServerProvider('http://fac130l.princeton.edu:8080', httpClient);
// const dataProvider = jsonServerProvider('http://localhost:8080', httpClient);
const App = () => (
      <Admin theme={theme} authProvider={authProvider} dataProvider={dataProvider} loginPage={MyLoginPage}>
          {/* <Resource name="posts" list={ListGuesser} />
          <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}/> */}
          <Resource name="project-requests" list={ProjectRequestList} edit={ProjectFormEdit} create={ProjectFormCreate} />
          <Resource name="sites" />
          <Resource name="buildings" />
          <Resource name="floors" />
          <Resource name="rooms" />
      </Admin>
  );

export default App;
