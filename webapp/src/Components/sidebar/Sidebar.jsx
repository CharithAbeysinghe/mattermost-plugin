// Copyright (c) 2020-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import styled from 'styled-components';
import {Link, useRouteMatch} from 'react-router-dom';
// import Scrollbars from 'react-custom-scrollbars';

const Sidebar = () => {
    // const team = useSelector(selectTeam(props.team_id));

    const teamName = (
        <TeamName>
            Test
        </TeamName>
    );

    const {path} = useRouteMatch();

    return (
        <SidebarComponent>
            <Header>
                 <nav >
                    <ul style={{listStyle: 'none', padding: 0}}>
                        <li><Link to={`${path}/`}>Projects</Link></li>
                        <li><Link to={`${path}/stack-holders`}>Stake Holder</Link></li>
                        <li><Link to={`${path}/my-status`}>My Status</Link></li>
                    </ul>
                </nav>
            </Header>
            {/* <Scrollbars
            >
                test
            </Scrollbars> */}
        </SidebarComponent>
    );
};

const SidebarComponent = styled.div`
    position: fixed;
    z-index: 16;
    display: flex;
    width: 241px;
    height: 100%;
    flex-direction: column;
    border-right: 1px solid rgba(var(--center-channel-color-rgb), 0.12);
    background-color: var(--sidebar-bg);
`;

const Header = styled.div`
    display: flex;
    height: 52px;
    flex: initial;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    margin: 0;
    gap: 8px;
`;

const TeamName = styled.h1`
    display: inline-block;
    overflow: hidden;
    margin: 0;
    color: var(--sidebar-header-text-color);
    cursor: pointer;
    font-family: Metropolis, sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export default Sidebar;
