import * as React from "react";
import { List, Datagrid, TextField, DateField, NumberField, EmailField, UrlField, EditButton, TextInput, DateInput, NumberInput, SimpleForm, Edit, Create, SelectInput,FormWithRedirect,
    
    SelectArrayInput,
    
    SaveButton,
    DeleteButton,
    NullableBooleanInput, ReferenceInput,FormDataConsumer, required } from 'react-admin';

import { Typography, Box, Toolbar,Divider  } from '@material-ui/core';
import numeral from 'numeral';

const formatBudget = value =>
  value === undefined
    ? '' // make controlled
    : numeral(value).format('$0,0')

const optionRenderer = choice => `${choice.id} ${choice.name}`;    

const segments = [
    { id: 'compulsive', name: 'Compulsive' },
    { id: 'collector', name: 'Collector' },
    { id: 'ordered_once', name: 'Ordered Once' },
    { id: 'regular', name: 'Regular' },
    { id: 'returns', name: 'Returns' },
    { id: 'reviewer', name: 'Reviewer' },
];

export const ProjectRequestList = props => (
    <List title="Facilities Project Requests" {...props}>
        <Datagrid rowClick="edit">
            <EditButton />
            <TextField source="id" />
            <TextField source="projectName" />
            <TextField source="netId" label="NetId" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="projectLocationBuilding" label="Location" />
            <TextField source="userName" label="Created By"/>
            {/* <TextField source="projectLocationCampus" />
            <TextField source="projectPriority" />
            <NumberField source="fiscalYearStart" />
            <TextField source="projectLocationFloor" />
            <TextField source="projectLocationRoom" />
            <TextField source="projectDetails" />
            <TextField source="estimatedBudget" />
            <DateField source="dateRequiredBy" />
            <TextField source="sourceOfFunding" />
            <TextField source="projectType" />
            <TextField source="reason" />
            <TextField source="executingDepartment" />
            <DateField source="estimatedStartDate" />
            <DateField source="estimatedEndDate" />
            <TextField source="attachment" /> */}

        </Datagrid>
    </List>
);

export const ProjectRequestEdit = props => (
    <Edit title="Edit Project Request Form" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="phone" />
            <TextInput source="netId" />
            <TextInput source="managerFirstName" />
            <TextInput source="managerLastName" />
            <TextInput source="managerNetId" />
            <TextInput source="projectLocationCampus" />
            <TextInput source="projectLocationBuilding" />
            <TextInput source="projectLocationFloor" />
            <TextInput source="projectLocationRoom" />
            <TextInput source="projectName" />
            <TextInput multiline source="projectDetails" />
            <TextInput source="estimatedBudget" />
            <DateInput source="dateRequiredBy" />
            {/* <TextInput source="sourceOfFunding" /> */}
            <SelectInput source="sourceOfFunding" choices={[
                { id: 'Departmental', name: 'Departmental' },
                { id: 'Central Funding (Capital Request)', name: 'Central Funding Capital Request)' },
                { id: 'Major Maintenance', name: 'Major Maintenance' },
                { id: 'Operating', name: 'Operating' },
            ]} />
            {/* <TextInput source="projectType" /> */}
            <SelectInput source="projectType" choices={[
                { id: 'Feasibility Study', name: 'Feasibility Study' },
                { id: 'Furnishings/Interior Finishes', name: 'Furnishings/Interior Finishes' },
                { id: 'Major Maintenance Request for Immediate Consideration', name: 'Major Maintenance Request for Immediate Consideration' },
                { id: 'Major Maintenance Request for inclusion in Annual Program', name: 'Major Maintenance Request for inclusion in Annual Program' },
                { id: 'Feasibility Study', name: 'Feasibility Study' },
                { id: 'New Building', name: 'New Building' },
                { id: 'Renovation', name: 'Renovation' },
            ]} />

            {/* <TextInput source="projectPriority" /> */}

            <SelectInput source="projectPriority" choices={[
                { id: 'End of useful life', name: 'End of useful life' },
                { id: 'Current condition justifies repair/replacement', name: 'Current condition justifies repair/replacement' },
                { id: 'Regulatory and code requirements', name: 'Regulatory and code requirements' },
                { id: 'An opportunity project', name: 'An opportunity project' },
                { id: 'An emergency condition exist', name: 'An emergency condition exist' },
                { id: 'Departmental Request', name: 'Departmental Request' },
                { id: 'Provost Request', name: 'Provost Request' },
                { id: 'Capital Plan Priority', name: 'Capital Plan Priority' },
                { id: 'New Faculty/Staff', name: 'New Faculty/Staff' },
                { id: 'Health and Safety', name: 'Health and Safety' },
                { id: 'Consider for MM – FY- Annual', name: 'Consider for MM – FY- Annual' },
            ]} />
            {/* <TextInput source="reason" /> */}
            <SelectInput source="reason" choices={[
                { id: 'Architectural System Upgrade', name: 'Architectural System Upgrade' },
                { id: 'Department Request', name: 'Department Request' },
                { id: 'Electrical System Upgrade', name: 'Electrical System Upgrade' },
                { id: 'End of Useful Life', name: 'End of Useful Life' },
                { id: 'Energy Savings', name: 'Energy Savings' },
                { id: 'Fire Protection', name: 'Fire Protection' },
                { id: 'General Maintenance', name: 'General Maintenance' },
                { id: 'Indoor Air Quality Issues', name: 'Indoor Air Quality Issues' },
                { id: 'Mechanical System Upgrade', name: 'Mechanical System Upgrade' },
                { id: 'Multi-phase Continuation', name: 'Multi-phase Continuation' },
                { id: 'Off-line Building', name: 'Off-line Building' },
                { id: 'Plumbing System Upgrade', name: 'Plumbing System Upgrade' },
                { id: 'Regulatory/Code', name: 'Regulatory/Code' },
                { id: 'Renovation', name: 'Renovation' },
                { id: 'Repair/Replace', name: 'Repair/Replace' },
                { id: 'Roofing', name: 'Roofing' },
                { id: 'Safety', name: 'Safety' },
                { id: 'Security', name: 'Security' },
                { id: 'Unallocated', name: 'Unallocated' },
            ]} />

            {/* <TextInput source="executingDepartment" /> */}
            <SelectInput source="executingDepartment" choices={[
                { id: 'Building Services', name: 'Building Services' },
                { id: 'Engineering', name: 'Engineering' },
                { id: 'Facilities Administrative Services', name: 'Facilities Administrative Services' },
                { id: 'Facilities Operations', name: 'Facilities Operations' },
                { id: 'iFacilities Group for the Facilities Procurement Office', name: 'iFacilities Group for the Facilities Procurement Office' },
                { id: 'Grounds and Building Maintenance', name: 'Grounds and Building Maintenance' },
                { id: 'Housing', name: 'Housing' },

                { id: 'Office of Design and Construction', name: 'Office of Design and Construction' },
                { id: 'Office of the University Architect', name: 'Office of the University Architect' },
                { id: 'Princeton Plasma Physics Laboratory AC Power', name: 'Princeton Plasma Physics Laboratory AC Power' },
                { id: 'Princeton Plasma Physics Laboratory Administration', name: 'Princeton Plasma Physics Laboratory Administration' },
                { id: 'Princeton Plasma Physics Laboratory Engineering Services', name: 'Princeton Plasma Physics Laboratory Engineering Services' },
                { id: 'Princeton Plasma Physics Laboratory Experimental Equipment', name: 'Princeton Plasma Physics Laboratory Experimental Equipment' },
                { id: 'Princeton Plasma Physics Laboratory Maintenance Services', name: 'Princeton Plasma Physics Laboratory Maintenance Services' },
                { id: 'Princeton Plasma Physics Laboratory Property and Warehouse', name: 'Princeton Plasma Physics Laboratory Property and Warehouse' },
                { id: 'Real Estate Development', name: 'Real Estate Development' },
                { id: 'Site Protection', name: 'Site Protection' },
            ]} />



            <NumberInput min={1980} max={2050} step={1} source="fiscalYearStart" />
            <DateInput source="estimatedStartDate" />
            <DateInput source="estimatedEndDate" />
            <TextInput source="attachment" />
        </SimpleForm>
    </Edit>
);


export const ProjectRequestCreate = props => (
    <Create title="Project Request Form"  {...props}>
        <SimpleForm variant="outlined" >
            <TextInput source="firstName" />
            <TextInput source="lastName" />

            <TextInput source="phone" />
            <TextInput source="netId" />
            <TextInput source="managerFirstName" />
            <TextInput source="managerLastName" />
            <TextInput source="managerNetId" />
            <TextInput source="projectLocationCampus" />
            <TextInput source="projectLocationBuilding" />
            <TextInput source="projectLocationFloor" />
            <TextInput source="projectLocationRoom" />
            <TextInput source="projectName" />
            <TextInput multiline source="projectDetails" />
            <TextInput source="estimatedBudget" />
            <DateInput source="dateRequiredBy" />
            {/* <TextInput source="sourceOfFunding" /> */}
            <SelectInput source="sourceOfFunding" choices={[
                { id: 'Departmental', name: 'Departmental' },
                { id: 'Central Funding (Capital Request)', name: 'Central Funding Capital Request)' },
                { id: 'Major Maintenance', name: 'Major Maintenance' },
                { id: 'Operating', name: 'Operating' },
            ]} />
            {/* <TextInput source="projectType" /> */}
            <SelectInput source="projectType" choices={[
                { id: 'Feasibility Study', name: 'Feasibility Study' },
                { id: 'Furnishings/Interior Finishes', name: 'Furnishings/Interior Finishes' },
                { id: 'Major Maintenance Request for Immediate Consideration', name: 'Major Maintenance Request for Immediate Consideration' },
                { id: 'Major Maintenance Request for inclusion in Annual Program', name: 'Major Maintenance Request for inclusion in Annual Program' },
                { id: 'Feasibility Study', name: 'Feasibility Study' },
                { id: 'New Building', name: 'New Building' },
                { id: 'Renovation', name: 'Renovation' },
            ]} />

            {/* <TextInput source="projectPriority" /> */}

            <SelectInput source="projectPriority" choices={[
                { id: 'End of useful life', name: 'End of useful life' },
                { id: 'Current condition justifies repair/replacement', name: 'Current condition justifies repair/replacement' },
                { id: 'Regulatory and code requirements', name: 'Regulatory and code requirements' },
                { id: 'An opportunity project', name: 'An opportunity project' },
                { id: 'An emergency condition exist', name: 'An emergency condition exist' },
                { id: 'Departmental Request', name: 'Departmental Request' },
                { id: 'Provost Request', name: 'Provost Request' },
                { id: 'Capital Plan Priority', name: 'Capital Plan Priority' },
                { id: 'New Faculty/Staff', name: 'New Faculty/Staff' },
                { id: 'Health and Safety', name: 'Health and Safety' },
                { id: 'Consider for MM – FY- Annual', name: 'Consider for MM – FY- Annual' },
            ]} />
            {/* <TextInput source="reason" /> */}
            <SelectInput source="reason" choices={[
                { id: 'Architectural System Upgrade', name: 'Architectural System Upgrade' },
                { id: 'Department Request', name: 'Department Request' },
                { id: 'Electrical System Upgrade', name: 'Electrical System Upgrade' },
                { id: 'End of Useful Life', name: 'End of Useful Life' },
                { id: 'Energy Savings', name: 'Energy Savings' },
                { id: 'Fire Protection', name: 'Fire Protection' },
                { id: 'General Maintenance', name: 'General Maintenance' },
                { id: 'Indoor Air Quality Issues', name: 'Indoor Air Quality Issues' },
                { id: 'Mechanical System Upgrade', name: 'Mechanical System Upgrade' },
                { id: 'Multi-phase Continuation', name: 'Multi-phase Continuation' },
                { id: 'Off-line Building', name: 'Off-line Building' },
                { id: 'Plumbing System Upgrade', name: 'Plumbing System Upgrade' },
                { id: 'Regulatory/Code', name: 'Regulatory/Code' },
                { id: 'Renovation', name: 'Renovation' },
                { id: 'Repair/Replace', name: 'Repair/Replace' },
                { id: 'Roofing', name: 'Roofing' },
                { id: 'Safety', name: 'Safety' },
                { id: 'Security', name: 'Security' },
                { id: 'Unallocated', name: 'Unallocated' },
            ]} />

            {/* <TextInput source="executingDepartment" /> */}
            <SelectInput source="executingDepartment" choices={[
                { id: 'Building Services', name: 'Building Services' },
                { id: 'Engineering', name: 'Engineering' },
                { id: 'Facilities Administrative Services', name: 'Facilities Administrative Services' },
                { id: 'Facilities Operations', name: 'Facilities Operations' },
                { id: 'iFacilities Group for the Facilities Procurement Office', name: 'iFacilities Group for the Facilities Procurement Office' },
                { id: 'Grounds and Building Maintenance', name: 'Grounds and Building Maintenance' },
                { id: 'Housing', name: 'Housing' },

                { id: 'Office of Design and Construction', name: 'Office of Design and Construction' },
                { id: 'Office of the University Architect', name: 'Office of the University Architect' },
                { id: 'Princeton Plasma Physics Laboratory AC Power', name: 'Princeton Plasma Physics Laboratory AC Power' },
                { id: 'Princeton Plasma Physics Laboratory Administration', name: 'Princeton Plasma Physics Laboratory Administration' },
                { id: 'Princeton Plasma Physics Laboratory Engineering Services', name: 'Princeton Plasma Physics Laboratory Engineering Services' },
                { id: 'Princeton Plasma Physics Laboratory Experimental Equipment', name: 'Princeton Plasma Physics Laboratory Experimental Equipment' },
                { id: 'Princeton Plasma Physics Laboratory Maintenance Services', name: 'Princeton Plasma Physics Laboratory Maintenance Services' },
                { id: 'Princeton Plasma Physics Laboratory Property and Warehouse', name: 'Princeton Plasma Physics Laboratory Property and Warehouse' },
                { id: 'Real Estate Development', name: 'Real Estate Development' },
                { id: 'Site Protection', name: 'Site Protection' },
            ]} />



            <NumberInput min={1980} max={2050} step={1} source="fiscalYearStart" />
            <DateInput source="estimatedStartDate" />
            <DateInput source="estimatedEndDate" />
            <TextInput source="attachment" />
        </SimpleForm>
    </Create>
);

export const ProjectFormCreate = props => (
    <Create title="Facilities Project Request Form" {...props}>
        <ProjectForm />
    </Create>
);

export const ProjectFormEdit = props => (
    <Edit title="Facilities Project Request Form" {...props}>
        {/* <TextInput disabled source="id" /> */}
        <ProjectForm />
    </Edit>
);

const VisitorForm = props => (
    <FormWithRedirect
        {...props}
        render={formProps => (
            // here starts the custom form layout
            <form>
                <Box p="1em">
                    <Box display="flex">
                        <Box flex={2} mr="1em">

                            <Typography variant="h6" gutterBottom>Identity</Typography>

                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    <TextInput source="first_name" resource="customers" fullWidth />
                                </Box>
                                <Box flex={1} ml="0.5em">
                                    <TextInput source="last_name" resource="customers" fullWidth />
                                </Box>
                            </Box>
                            <TextInput source="email" resource="customers" type="email" fullWidth />
                            <DateInput source="birthday" resource="customers" />
                            <Box mt="1em" />

                            <Typography variant="h6" gutterBottom>Address</Typography>

                            <TextInput resource="customers" source="address" multiline fullWidth />
                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    <TextInput source="zipcode" resource="customers" fullWidth />
                                </Box>
                                <Box flex={2} ml="0.5em">
                                    <TextInput source="city" resource="customers" fullWidth />
                                </Box>
                            </Box>
                        </Box>

                        <Box flex={1} ml="1em">

                            <Typography variant="h6" gutterBottom>Stats</Typography>

                            <SelectArrayInput source="groups" resource="customers" choices={segments} fullWidth />
                            <NullableBooleanInput source="has_newsletter" resource="customers" />
                        </Box>

                    </Box>
                </Box>
                <Toolbar>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <SaveButton
                            saving={formProps.saving}
                            handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                        />
                        <DeleteButton record={formProps.record} />
                    </Box>
                </Toolbar>
            </form>
        )}
    />
);

const ProjectForm = props => (
    <FormWithRedirect
        {...props}
        render={formProps => (
            // here starts the custom form layout
            <form>
                <Box p="1em">
                    <Box display="flex">
                        <Box flex={1} mr="1em">

                            <Typography variant="h6" gutterBottom>Requestor Information</Typography>

                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    <TextInput source="firstName"  label="First Name" resource="project-requests"  margin="dense" variant="outlined" fullWidth validate={[required()]}/>
                                </Box>
                                <Box flex={1} ml="0.5em">
                                    <TextInput source="lastName"  label="Last Name" resource="project-requests"  margin="dense" variant="outlined" fullWidth validate={[required()]}/>
                                </Box>
                            </Box>
                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    <TextInput source="phone" resource="project-requests"  margin="dense" variant="outlined" fullWidth validate={[required()]}/>
                                </Box>
                                <Box flex={1} ml="0.5em">
                                    <TextInput source="netId"  label="Net Id" resource="project-requests"  margin="dense" variant="outlined" fullWidth validate={[required()]}/>
                                </Box>
                            </Box>
                            <Box mt="1em" />
                            <Divider />
                            <Box mt="1em" />
                            <Typography variant="h6" gutterBottom>Department Chair/Manager Information</Typography>

                            <TextInput resource="project-requests" source="managerNetId" label="Manager Net Id" margin="dense" variant="outlined"  validate={[required()]}/>
                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    <TextInput source="managerFirstName" resource="project-requests" label="Manager First Name" margin="dense" variant="outlined" fullWidth validate={[required()]}/>
                                </Box>
                                <Box flex={1} ml="0.5em">
                                    <TextInput source="managerLastName" resource="project-requests" label="Manager Last Name" margin="dense" variant="outlined" fullWidth validate={[required()]}/>
                                </Box>
                            </Box>

                            <Box mt="1em" />
                            <Divider />
                            <Box mt="1em" />
                            <Typography variant="h6" gutterBottom>Project Location</Typography>
                            <ReferenceInput label="Campus" source="projectLocationCampus" reference="sites">
                                <SelectInput  optionText="name" optionValue="id" margin="dense" variant="outlined"  fullWidth validate={[required()]}/>
                            </ReferenceInput>

                            <FormDataConsumer>
                            {({ formData, ...rest }) =>  formData.projectLocationCampus &&(

                            <ReferenceInput label="Building" source="projectLocationBuilding" reference="buildings" filter={{site: formData.projectLocationCampus}} {...rest}>
                                <SelectInput  source="projectLocationBuilding" optionText="name" optionValue="id" margin="dense" variant="outlined"  fullWidth validate={[required()]}/>
                            </ReferenceInput>
                            )}
                            </FormDataConsumer>

                            <FormDataConsumer>
                            {({ formData, ...rest }) =>  formData.projectLocationCampus && formData.projectLocationBuilding && (
                            <ReferenceInput label="Floor" source="projectLocationFloor" reference="floors" filter={{site: formData.projectLocationCampus , buildingCode: formData.projectLocationBuilding}} {...rest}>
                                <SelectInput source="projectLocationFloor" optionText={optionRenderer}  optionValue="id" margin="dense" variant="outlined"  fullWidth/>
                            </ReferenceInput>
                            )}
                            </FormDataConsumer>

                            <FormDataConsumer>
                            {({ formData, ...rest }) => formData.projectLocationCampus && formData.projectLocationBuilding && formData.projectLocationFloor && (
                            <ReferenceInput label="Room" source="projectLocationRoom" reference="rooms" filter={{site: formData.projectLocationCampus , buildingCode: formData.projectLocationBuilding, floorCode: formData.projectLocationFloor}} {...rest}>
                                <SelectInput source="projectLocationRoom" optionText={optionRenderer} optionValue="id" margin="dense" variant="outlined"  fullWidth/>
                            </ReferenceInput>
                            )}
                            </FormDataConsumer>
                            
                        

                            <Box mt="1em" />
                            <Divider />
                            <Box mt="1em" />
                            <Typography variant="h6" gutterBottom>Project Details</Typography>

                            <TextInput resource="project-requests" source="projectName" label="Project Name" margin="dense" variant="outlined"  fullWidth validate={[required()]}/>
                            <TextInput resource="project-requests" multiline source="projectDetails" label="Project Details" margin="dense" variant="outlined"  fullWidth/>
                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    <TextInput source="estimatedBudget" resource="project-requests" label="Estimated Budget" margin="dense" variant="outlined" fullWidth  format={formatBudget}/>
                                </Box>
                                <Box flex={1} ml="0.5em">
                                    <DateInput source="dateRequiredBy" resource="project-requests" label="Date Required By" margin="dense" variant="outlined" fullWidth validate={[required()]}/>
                                </Box>
                            </Box>
                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    {/* <TextInput source="managerFirstName" resource="project-requests" label="Manager First Name" margin="dense" variant="outlined" fullWidth /> */}

                                    <SelectInput source="sourceOfFunding" resource="project-requests" label="Source Of Funding" margin="dense" variant="outlined" fullWidth choices={[
                { id: 'Central Funding (Capital Request)', name: 'Central Funding (Capital Request)' },
                { id: 'Departmental', name: 'Departmental' },
                { id: 'Major Maintenance', name: 'Major Maintenance' },
                { id: 'Operating', name: 'Operating' },
            ]} />
                                </Box>
                                <Box flex={1} ml="0.5em">
                                    {/* <TextInput source="managerLastName" resource="project-requests" label="Manager Last Name" margin="dense" variant="outlined" fullWidth /> */}

                                    <SelectInput source="projectType" resource="project-requests" label="Project Type" margin="dense" variant="outlined" fullWidth choices={[
                { id: 'Feasibility Study', name: 'Feasibility Study' },
                { id: 'Furnishings/Interior Finishes', name: 'Furnishings/Interior Finishes' },
                { id: 'Major Maintenance Request for Immediate Consideration', name: 'Major Maintenance Request for Immediate Consideration' },
                { id: 'Major Maintenance Request for inclusion in Annual Program', name: 'Major Maintenance Request for inclusion in Annual Program' },
                { id: 'New Building', name: 'New Building' },
                { id: 'Renovation', name: 'Renovation' },
            ]} />
                                </Box>
                            </Box>

                            <Box mt="1em" />
                            <Divider />
                            <Box mt="1em" />
                            <Typography variant="h6" gutterBottom>Additional Project Details (To be completed by Facilities Staff)</Typography>

                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    {/* <TextInput source="managerFirstName" resource="project-requests" label="Manager First Name" margin="dense" variant="outlined" fullWidth /> */}
                                    <SelectInput source="projectPriority" resource="project-requests" label="Project Priority" margin="dense" variant="outlined" fullWidth choices={[
                { id: 'An emergency condition exist', name: 'An emergency condition exist' },
                { id: 'An opportunity project', name: 'An opportunity project' },
                { id: 'Capital Plan Priority', name: 'Capital Plan Priority' },
                { id: 'Consider for MM – FY- Annual', name: 'Consider for MM – FY- Annual' },
                { id: 'Current condition justifies repair/replacement', name: 'Current condition justifies repair/replacement' },
                { id: 'Departmental Request', name: 'Departmental Request' },
                { id: 'End of useful life', name: 'End of useful life' },
                { id: 'Health and Safety', name: 'Health and Safety' },
                { id: 'New Faculty/Staff', name: 'New Faculty/Staff' },
                { id: 'Provost Request', name: 'Provost Request' },
                { id: 'Regulatory and code requirements', name: 'Regulatory and code requirements' },
            ]} />
                                </Box>
                                <Box flex={1} ml="0.5em">
                                    {/* <TextInput source="Reason" resource="project-requests" label="Reason" margin="dense" variant="outlined" fullWidth /> */}

                                    <SelectInput source="reason" resource="project-requests" label="Reason" margin="dense" variant="outlined" fullWidth choices={[
                { id: 'Architectural System Upgrade', name: 'Architectural System Upgrade' },
                { id: 'Department Request', name: 'Department Request' },
                { id: 'Electrical System Upgrade', name: 'Electrical System Upgrade' },
                { id: 'End of Useful Life', name: 'End of Useful Life' },
                { id: 'Energy Savings', name: 'Energy Savings' },
                { id: 'Fire Protection', name: 'Fire Protection' },
                { id: 'General Maintenance', name: 'General Maintenance' },
                { id: 'Indoor Air Quality Issues', name: 'Indoor Air Quality Issues' },
                { id: 'Mechanical System Upgrade', name: 'Mechanical System Upgrade' },
                { id: 'Multi-phase Continuation', name: 'Multi-phase Continuation' },
                { id: 'Off-line Building', name: 'Off-line Building' },
                { id: 'Plumbing System Upgrade', name: 'Plumbing System Upgrade' },
                { id: 'Regulatory/Code', name: 'Regulatory/Code' },
                { id: 'Renovation', name: 'Renovation' },
                { id: 'Repair/Replace', name: 'Repair/Replace' },
                { id: 'Roofing', name: 'Roofing' },
                { id: 'Safety', name: 'Safety' },
                { id: 'Security', name: 'Security' },
                { id: 'Unallocated', name: 'Unallocated' },
            ]} />
                                </Box>
                            </Box>
                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    {/* <TextInput source="estimatedBudget" resource="project-requests" label="Estimated Budget" margin="dense" variant="outlined" fullWidth /> */}
                                    <SelectInput source="executingDepartment" resource="project-requests" label="Executing Department" margin="dense" variant="outlined" fullWidth choices={[
                { id: 'Building Services', name: 'Building Services' },
                { id: 'Engineering', name: 'Engineering' },
                { id: 'Facilities Administrative Services', name: 'Facilities Administrative Services' },
                { id: 'Facilities Operations', name: 'Facilities Operations' },
                { id: 'Facilities Group for the Facilities Procurement Office', name: 'Facilities Group for the Facilities Procurement Office' },
                { id: 'Grounds and Building Maintenance', name: 'Grounds and Building Maintenance' },
                { id: 'Housing', name: 'Housing' },

                { id: 'Office of Design and Construction', name: 'Office of Design and Construction' },
                { id: 'Office of the University Architect', name: 'Office of the University Architect' },
                { id: 'Princeton Plasma Physics Laboratory AC Power', name: 'Princeton Plasma Physics Laboratory AC Power' },
                { id: 'Princeton Plasma Physics Laboratory Administration', name: 'Princeton Plasma Physics Laboratory Administration' },
                { id: 'Princeton Plasma Physics Laboratory Engineering Services', name: 'Princeton Plasma Physics Laboratory Engineering Services' },
                { id: 'Princeton Plasma Physics Laboratory Experimental Equipment', name: 'Princeton Plasma Physics Laboratory Experimental Equipment' },
                { id: 'Princeton Plasma Physics Laboratory Maintenance Services', name: 'Princeton Plasma Physics Laboratory Maintenance Services' },
                { id: 'Princeton Plasma Physics Laboratory Property and Warehouse', name: 'Princeton Plasma Physics Laboratory Property and Warehouse' },
                { id: 'Real Estate Development', name: 'Real Estate Development' },
                { id: 'Site Protection', name: 'Site Protection' },
            ]} />
                                </Box>
                                <Box flex={1} ml="0.5em">
                                    {/* <DateInput source="dateRequiredBy" resource="project-requests" label="Date Required By" margin="dense" variant="outlined" fullWidth /> */}
                                    <NumberInput min={1980} max={2050} step={1} source="fiscalYearStart"  resource="project-requests" label="Fiscal Year Start" margin="dense" variant="outlined" fullWidth/>
                                </Box>
                            </Box>
                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    <DateInput source="estimatedStartDate" resource="project-requests" label="Estimated Start Date" margin="dense" variant="outlined" fullWidth/>
                                </Box>
                                <Box flex={1} ml="0.5em">
                                    <DateInput source="estimatedEndDate" resource="project-requests" label="Estimated End Date" margin="dense" variant="outlined" fullWidth/>
                                </Box>
                            </Box>

                            <Box mt="1em" />
                            <Divider />
                            <Box mt="1em" />
                            <Typography variant="h6" gutterBottom>Attachments (You may select up to 5 files to upload. The max file size is 2MB)</Typography>

                            <TextInput source="attachment" resource="project-requests" label="Attachment" margin="dense" variant="outlined" fullWidth/>
                        </Box>

                        {/* <Box flex={1} ml="1em">

                            <Typography variant="h6" gutterBottom>Stats</Typography>

                            <SelectArrayInput source="groups" resource="customers" choices={segments} fullWidth />
                            <NullableBooleanInput source="has_newsletter" resource="customers" />
                        </Box> */}

                    </Box>
                </Box>
                <Toolbar>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <SaveButton
                            saving={formProps.saving}
                            handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                            label="Submit"
                        />
                        <DeleteButton record={formProps.record} />
                    </Box>
                </Toolbar>
            </form>
        )}
    />
);