import React from 'react'
import PaginatedTable from '../PaginatedTable';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';


type Project = {
    project: string;
    role: string;
    noofassigned: string;
    id: string;
};

const data: Project[] = [
    {id:'1',project: 'Project 1', role: 'Project Manager', noofassigned: '10'},
    {id:'2',project: 'Project 2', role: 'Alice', noofassigned: '15'},
    {id:'3',project: 'Project 3', role: 'Alice', noofassigned: '15'},
    {id:'4',project: 'Project 4', role: 'Alice', noofassigned: '15'},
    {id:'5',project: 'Project 5', role: 'Alice', noofassigned: '15'},
    {id:'6',project: 'Project 6', role: 'Alice', noofassigned: '15'},
    {id:'7',project: 'Project 7', role: 'Alice', noofassigned: '15'},
    {id:'8',project: 'Project 8', role: 'Alice', noofassigned: '15'}
];

const columns: { header: string; accessor: keyof Project; renderLink?: (row: Project) => string }[] = [
    {header: 'Projects', accessor: 'project', renderLink: (row) => `/project-overview/my-stats/${encodeURIComponent(row.id)}`},
    {header: 'Role', accessor: 'role'},
    {header: 'No. task assigned', accessor: 'noofassigned'}
];

const H1 = styled.h1`
  color:var(--center-channel-color);
`;


const MyStatus = () => {

   const history = useHistory(); 
  
     const handleItemClick = (url:any) => {

         history.push(url);
      }

  return (
    <div>
      <H1>Project Involving (8)</H1>
        <PaginatedTable data={data} columns={columns} rowsPerPage={5} onItemClick={handleItemClick}/> 
    </div>
  )
}

export default MyStatus
