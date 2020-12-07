import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
// import { Admin, Resource } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserEdit, UserCreate } from "./users";
import { ProjectRequestList , ProjectRequestEdit, ProjectRequestCreate, ProjectFormCreate,ProjectFormEdit} from "./projects";

const dataProvider = jsonServerProvider('http://localhost:8080');
const App = () => (
      <Admin dataProvider={dataProvider}>
          {/* <Resource name="posts" list={ListGuesser} />
          <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}/> */}
          <Resource name="project-requests" list={ProjectRequestList} edit={ProjectFormEdit} create={ProjectFormCreate} />
      </Admin>
  );

export default App;