import React from 'react'
import PaginatedTable from '../PaginatedTable';
import SummaryFilter from './SummaryFilter';
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

const data: Project[] = [
    {name: 'Project 1', assignedtask: 'Alice', tottime: 'In Progress', delaytime: 'In Progress', difficulttask: 'In Progress', highprioritytask: 'In Progress', pendingtask: 'In Progress', userrole: 'In Progress'},
    {name: 'Project 1', assignedtask: 'Alice', tottime: 'In Progress', delaytime: 'In Progress', difficulttask: 'In Progress', highprioritytask: 'In Progress', pendingtask: 'In Progress', userrole: 'In Progress'},
    {name: 'Project 1', assignedtask: 'Alice', tottime: 'In Progress', delaytime: 'In Progress', difficulttask: 'In Progress', highprioritytask: 'In Progress', pendingtask: 'In Progress', userrole: 'In Progress'},
    {name: 'Project 1', assignedtask: 'Alice', tottime: 'In Progress', delaytime: 'In Progress', difficulttask: 'In Progress', highprioritytask: 'In Progress', pendingtask: 'In Progress', userrole: 'In Progress'},
    {name: 'Project 1', assignedtask: 'Alice', tottime: 'In Progress', delaytime: 'In Progress', difficulttask: 'In Progress', highprioritytask: 'In Progress', pendingtask: 'In Progress', userrole: 'In Progress'},
    {name: 'Project 1', assignedtask: 'Alice', tottime: 'In Progress', delaytime: 'In Progress', difficulttask: 'In Progress', highprioritytask: 'In Progress', pendingtask: 'In Progress', userrole: 'In Progress'},
    {name: 'Project 1', assignedtask: 'Alice', tottime: 'In Progress', delaytime: 'In Progress', difficulttask: 'In Progress', highprioritytask: 'In Progress', pendingtask: 'In Progress', userrole: 'In Progress'},
    {name: 'Project 1', assignedtask: 'Alice', tottime: 'In Progress', delaytime: 'In Progress', difficulttask: 'In Progress', highprioritytask: 'In Progress', pendingtask: 'In Progress', userrole: 'In Progress'},
    {name: 'Project 1', assignedtask: 'Alice', tottime: 'In Progress', delaytime: 'In Progress', difficulttask: 'In Progress', highprioritytask: 'In Progress', pendingtask: 'In Progress', userrole: 'In Progress'},
    {name: 'Project 1', assignedtask: 'Alice', tottime: 'In Progress', delaytime: 'In Progress', difficulttask: 'In Progress', highprioritytask: 'In Progress', pendingtask: 'In Progress', userrole: 'In Progress'},
    {name: 'Project 1', assignedtask: 'Alice', tottime: 'In Progress', delaytime: 'In Progress', difficulttask: 'In Progress', highprioritytask: 'In Progress', pendingtask: 'In Progress', userrole: 'In Progress'}
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

const CompletedTasks = () => {
  return (
    <div>
      <SummaryFilter/>
      <Row>
          <Half>Summary From 01/01/2025 to 01/03/2025</Half>
          <Half>Total time spent : 300h 50h</Half>
      </Row>
      <PaginatedTable data={data} columns={columns} rowsPerPage={5}/> 
    </div>
  )
}

export default CompletedTasks
