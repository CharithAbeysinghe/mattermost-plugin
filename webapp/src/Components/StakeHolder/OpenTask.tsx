import React from 'react'
import PaginatedTable from '../PaginatedTable';
import OpenTaskFilter from './OpenTaskFilter';


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


const OpenTask = () => {


  return (
    <div>
      <OpenTaskFilter/>
       <PaginatedTable data={data} columns={columns} rowsPerPage={5}/> 
    </div>
  )
}

export default OpenTask
