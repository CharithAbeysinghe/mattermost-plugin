import React from 'react'
import PaginatedItemList from '../PaginatedList';
import { useHistory } from 'react-router-dom';

const projects = [
    {id: '1', title: 'Website Redesign', subtitle: 'UI/UX overhaul', data: { /* ... */ }},
    {id: '2', title: 'Mobile App', subtitle: 'React Native build', data: { /* ... */ }},
    // ...more projects
];


const StakeHolder = () => {

  const history = useHistory(); 
  
     const handleItemClick = (itemId:any) => {
  
           history.push(`/project-overview/stack-holder/${itemId}`);
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

export default StakeHolder
