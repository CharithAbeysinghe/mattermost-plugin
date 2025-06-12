import React from 'react'
import PaginatedTable from '../PaginatedTable'
import styled from 'styled-components';


type Project = {
    name: string;
    assignedtask: string;
    tottime: string;
    delaytime: string;
    difficulttask: string;
    highprioritytask: string;
    pendingtask: string;
    userrole: string;
};

type Header = {
    stakeholder: string;
    pendingtask: string;
    difficulttask: string;
    priority: string;
    delaytask: string;
};

const headerTblColumns: { header: string; accessor: keyof Header }[] = [
    {header: 'Stake Holders', accessor: 'stakeholder'},
    {header: 'Pending Tasks', accessor: 'pendingtask'},
    {header: 'Difficult Tasks', accessor: 'difficulttask'},
    {header: 'Priorities', accessor: 'priority'},
    {header: 'Delayed Tasks', accessor: 'delaytask'},
];

const dataHeaderTbl: Header[] = [
    {stakeholder: '6', pendingtask: '20', difficulttask: '10', priority: '1/2/2', delaytask: '2'},
];

const data: Project[] = [
    {name: 'Project 1', assignedtask: 'Alice', tottime: 'In Progress', delaytime: 'In Progress', difficulttask: 'In Progress', highprioritytask: 'In Progress', pendingtask: 'In Progress', userrole: 'In Progress'},
    {name: 'Project 1', assignedtask: 'Alice', tottime: 'In Progress', delaytime: 'In Progress', difficulttask: 'In Progress', highprioritytask: 'In Progress', pendingtask: 'In Progress', userrole: 'In Progress'}
];

const columns: { header: string; accessor: keyof Project }[] = [
    {header: 'Name', accessor: 'name'},
    {header: 'Assigned Tasks', accessor: 'assignedtask'},
    {header: 'Total Time Spent (hours)', accessor: 'tottime'},
    {header: 'Delayed Tasks', accessor: 'delaytime'},
    {header: 'Difficult Tasks', accessor: 'difficulttask'},
    {header: 'High Priority Tasks', accessor: 'highprioritytask'},
    {header: 'Pending Tasks', accessor: 'pendingtask'},
    {header: 'User Roles', accessor: 'userrole'},
];

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;


const Half = styled.div`
  flex: 1;
  text-align: center;
`;

const Overview = () => {

  return (
    <>
      <Row>
          <Half>Summary From 01/01/2025 to 01/03/2025</Half>
          <Half>Total time spent : 300h 50h</Half>
      </Row>
      
      <div>
          <PaginatedTable data={dataHeaderTbl} columns={headerTblColumns} rowsPerPage={4} paginate={false} />
      </div>
              
      <div style={{ paddingTop: '20px' }}>
          <PaginatedTable data={data} columns={columns} rowsPerPage={5}/> 
      </div>
    </>
  )
}

export default Overview
