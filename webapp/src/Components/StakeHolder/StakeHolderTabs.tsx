import React from 'react'
import OpenTask from './OpenTask';
import CompletedTasks from './CompletedTasks';
import Tabs from '../Tabs';
import BackButton from '../BackButton';
import PageHeader from '../PageHeader';

const StakeHolderTabs = () => {

    const tabs = [
        { label: 'Open Tasks', content: <OpenTask /> },
        { label: 'Completed Tasks', content: <CompletedTasks /> },
    ];


  return (
      <div>
        <BackButton/>
        <PageHeader title="Project Involvement" subtitle="Your roles in active projects" />
          <Tabs tabs={tabs} />
      </div>
      
    )
}

export default StakeHolderTabs
