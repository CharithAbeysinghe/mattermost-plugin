import React, { useEffect, useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import styled, { css } from 'styled-components';

//pages
import Project from './Project/Project';
import StakeHolder from './StakeHolder/StakeHolder';
import MyStatus from './MyStatus/MyStatus';
import ProjectTabs from './Project/ProjectTabs';
import StakeHolderTabs from './StakeHolder/StakeHolderTabs';
import MyProjects from './MyStatus/MyProjects';
import { useSelector } from 'react-redux';
import {GlobalState} from '@mattermost/types/store';
import {Theme, getTheme} from 'mattermost-redux/selectors/entities/preferences';
import { AuthProvider } from '@/context/AuthContext';
import { getPermissions, Role } from '@/utils/auth';


const Main = () => {

    const currentTheme = useSelector<GlobalState, Theme>(getTheme);
    useEffect(() => {
        // This class, critical for all the styling to work, is added by ChannelController,
        // which is not loaded when rendering this root component.
        document.body.classList.add('app__body');
        const root = document.getElementById('root');
        if (root) {
            root.className += ' channel-view';
        }
        return function cleanUp() {
            document.body.classList.remove('app__body');
        };
    }, [currentTheme]);

    const currentUserRole:Role= 'member'; // set logged user role

    const permissions = getPermissions(currentUserRole);

        return (
            <AuthProvider role={currentUserRole}>
                <BackstageContainer>
                    <MainContainer $noContainerScroll={true}>
                        <LHSContainer data-testid='lhs-navigation'>
                                <Sidebar/>
                        </LHSContainer>

                        <Switch >
                            <RHSContainer>
                                    { permissions.accessLink ? (
                                    <>
                                        <Route exact path={`/project-overview`} component={Project} />
                                        <Route path={`/project-overview/stack-holders`} component={StakeHolder} />
                                        
                                        <Route path={`/project-overview/project/:id`} component={ProjectTabs} />
                                        <Route path={`/project-overview/stack-holder/:id`} component={StakeHolderTabs} />

                                        <Route path={`/project-overview/my-status`} component={MyStatus} />
                                        <Route path={`/project-overview/my-stats/:id`} component={MyProjects} />
                                    </>
                                   ) : ( <>
                                         <Route exact path={`/project-overview`} component={MyStatus} />
                                        <Route path={`/project-overview/my-stats/:id`} component={MyProjects} />
                                   </> )}
                                    
                                        
                            </RHSContainer>
                        </Switch>
                    </MainContainer>
                </BackstageContainer>
        </AuthProvider>
    );
};


const MainContainer = styled.div<{$noContainerScroll: boolean}>`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: max-content auto;
    ${({$noContainerScroll}) => ($noContainerScroll ? css`
        height: 100%;
    ` : css`
        min-height: 100%;
    `)}
`;

const BackstageContainer = styled.div`
    height: 100%;
    background: var(--center-channel-bg);
    overflow-y: auto;
`;

const LHSContainer = styled.div`
    display: flex;
    width: 240px;
    flex-direction: column;
    background-color: var(--sidebar-bg);
`;

const RHSContainer = styled.div`
    padding: 20px
`;

export default Main;
