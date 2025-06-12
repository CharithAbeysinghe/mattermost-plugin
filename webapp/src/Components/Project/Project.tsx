import React from 'react'
import PaginatedItemList from '../PaginatedList';
import { useHistory } from 'react-router-dom';

const projects = [
    {id: '1', title: 'Mattermost -Feature', subtitle: 'UI/UX overhaul', data: { /* ... */ }},
    {id: '2', title: 'PHPKB/iTraceiT', subtitle: 'React Native build', data: { /* ... */ }},
    {id: '3', title: 'iTraceiT Workflow 2.0', subtitle: 'React Native build', data: { /* ... */ }},
    {id: '4', title: 'Loca-Soft Support', subtitle: 'React Native build', data: { /* ... */ }},
    {id: '5', title: 'Mobile App', subtitle: 'React Native build', data: { /* ... */ }},
    {id: '6', title: 'Mobile App', subtitle: 'React Native build', data: { /* ... */ }},
    {id: '7', title: 'Mobile App', subtitle: 'React Native build', data: { /* ... */ }},
    {id: '8', title: 'Mobile App', subtitle: 'React Native build', data: { /* ... */ }},
    {id: '9', title: 'Mobile App', subtitle: 'React Native build', data: { /* ... */ }},
    {id: '10', title: 'Mobile App', subtitle: 'React Native build', data: { /* ... */ }},
    {id: '11', title: 'Mobile App', subtitle: 'React Native build', data: { /* ... */ }},
    {id: '12', title: 'Mobile App', subtitle: 'React Native build', data: { /* ... */ }},
    // ...more projects
];




const Project = () => {
   const history = useHistory(); 

   const handleItemClick = (itemId:any) => {

         history.push(`/project-overview/project/${itemId}`);
    }

  return (
    <div>
        <PaginatedItemList
            items={projects}
            onItemClick={handleItemClick}
            rowsPerPage={5}
        />
    </div>
  )
}

export default Project
