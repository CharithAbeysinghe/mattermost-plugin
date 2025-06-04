import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, useRouteMatch} from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import styled, { css } from 'styled-components';

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

const Dashboard = () => (
    <div>
        <h2>Dashboard</h2>
        <p>This is the main dashboard of your product.</p>
    </div>
);

const StakeHolders = () => (
    <div>
        <h2>stack-holders</h2>
        <p>StakeHolders page content here.</p>
    </div>
);

const MyStatus = () => (
    <div>
        <h2>MyStatus</h2>
        <p>MyStatus page content here.</p>
    </div>
);

const Main = () => {

    const {path} = useRouteMatch();

    return (
        <BackstageContainer>
            <MainContainer $noContainerScroll={true}>
                <LHSContainer data-testid='lhs-navigation'>
                        <Sidebar/>
                </LHSContainer>

                  <Switch >
                        <div style={{padding: '20px'}}>
                            <Switch>
                                <Route exact path={`${path}/`} component={Dashboard} />
                                <Route path={`${path}/stack-holders`} component={StakeHolders} />
                                <Route path={`${path}/my-status`} component={MyStatus} />
                            </Switch>
                        </div>
                </Switch>
            </MainContainer>
        </BackstageContainer>
        
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



export default Main;
