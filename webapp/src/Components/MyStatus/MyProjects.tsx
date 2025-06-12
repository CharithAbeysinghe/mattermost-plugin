import React from 'react'
import styled from 'styled-components';
import PaginatedTable from '../PaginatedTable';
import BackButton from '../BackButton';
import PageHeader from '../PageHeader';



const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;


const Half = styled.div`
  flex: 1;
  text-align: center;
  color:var(--center-channel-color);
`;

type Project = {
    name: string;
    status: string;
    estimateTime: string;
    timeSpent: string;
    taskCreatedDate: string;
    taskCreatedBy: string;
    followers: string;
    difficultLevel: string;
    priroty: string;
};

const data: Project[] = [
    {name: 'Task 01', status: 'To Do', estimateTime: 'In Progress', timeSpent: 'In Progress', taskCreatedDate: 'In Progress', taskCreatedBy: 'In Progress', followers: 'In Progress', difficultLevel: 'In Progress',priroty:'Low'},
    {name: 'Task 02', status: 'To Do', estimateTime: 'In Progress', timeSpent: 'In Progress', taskCreatedDate: 'In Progress', taskCreatedBy: 'In Progress', followers: 'In Progress', difficultLevel: 'In Progress',priroty:'Medium'}
];

const columns: { header: string; accessor: keyof Project; renderLink?: (row: Project) => string }[] = [
    {header: 'Name', accessor: 'name'},
    {header: 'Status', accessor: 'status'},
    {header: 'Time estimate', accessor: 'estimateTime'},
    {header: 'Time spent', accessor: 'timeSpent'},
    {header: 'Task Created Date', accessor: 'taskCreatedDate'},
    {header: 'Task Created By', accessor: 'taskCreatedBy'},
    {header: 'Followers', accessor: 'followers'},
    {header: 'Difficult Level', accessor: 'difficultLevel'},
    {header: 'Priority', accessor: 'priroty'},
];

const MyProjects = () => {
  return (
    <>
      <BackButton/>
      <PageHeader title="Project Involvement" subtitle="Your roles in active projects" />
      <Row>
        <Half>Developer</Half>
        <Half>Total time spent : 300h 50h</Half>
      </Row>

      <div style={{ paddingTop: '20px' }}>
             <PaginatedTable data={data} columns={columns} rowsPerPage={5} /> 
      </div>
    </>
  )
}

export default MyProjects
