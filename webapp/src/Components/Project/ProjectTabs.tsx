import React from 'react'
import Tabs from '../Tabs';
import Overview from './Overview';
import Summary from './Summary';
import BackButton from '../BackButton';
import PageHeader from '../PageHeader';

const ProjectTabs = () => {

    const tabs = [
        { label: 'Overview', content: <Overview /> },
        { label: 'Summary', content: <Summary /> },
    ];

    return (
        <>
        <BackButton/>
        <PageHeader title="Project Involvement" subtitle="Your roles in active projects" />
        
         <div>
            <Tabs tabs={tabs} />
        </div>

           
        </>
    )
    
}

export default ProjectTabs
