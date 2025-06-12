import React from 'react'
import PaginatedTable from '../PaginatedTable'

type Project = {
    name: string;
    owner: string;
    status: string;
};

const data: Project[] = [
    {name: 'Project 1', owner: 'Alice', status: 'In Progress'},
    {name: 'Project 2', owner: 'Bob', status: 'Completed'},
    {name: 'Project 3', owner: 'Bob', status: 'Completed'},
    {name: 'Project 4', owner: 'Bob', status: 'Completed'},
    {name: 'Project 5', owner: 'Bob', status: 'Completed'},
    {name: 'Project 6', owner: 'Bob', status: 'Completed'},
    {name: 'Project 7', owner: 'Bob', status: 'Completed'},
    {name: 'Project 8', owner: 'Bob', status: 'Completed'},
    {name: 'Project 9', owner: 'Bob', status: 'Completed'},
    {name: 'Project 10', owner: 'Bob', status: 'Completed'},
];

const columns: { header: string; accessor: keyof Project }[] = [
    {header: 'Name', accessor: 'name'},
    {header: 'Owner', accessor: 'owner'},
    {header: 'Status', accessor: 'status'},
];

const Project = () => {

    return (
        <>
            <h2>Projects</h2>

            <PaginatedTable data={data} columns={columns} rowsPerPage={5} />
        </>
    )
    
}

export default Project
