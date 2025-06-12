// Copyright (c) 2020-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const navItems = [
        { label: 'Projects', path: '/project-overview' },
        { label: 'Stake Holder', path: '/project-overview/stack-holders' },
        { label: 'My Status', path: '/project-overview/my-status' },
    ];

    return (
        <SidebarComponent>
            <Header>Project Overview</Header>
            <NavList>
                {navItems.map((item) => (
                    <NavItem key={item.path} active={location.pathname === item.path}>
                        <StyledLink to={item.path}>{item.label}</StyledLink>
                    </NavItem>
                ))}
            </NavList>
        </SidebarComponent>
    );
};

// --- Styled Components ---

const SidebarComponent = styled.div`
    position: fixed;
    z-index: 16;
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 100%;
    background-color: var(--sidebar-bg, #f4f4f6);
    border-right: 1px solid rgba(var(--center-channel-color-rgb, 0,0,0), 0.12);
    color: var(--sidebar-text); // 👈 Add this
    padding-top: 16px;
`;

const Header = styled.div`
    font-size: 16px;
    font-weight: 600;
    padding: 0 20px 12px 20px;
    border-bottom: 1px solid rgba(var(--center-channel-color-rgb), 0.08);
    color: var(--sidebar-text); // 👈 Add this
`;

const NavList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0 0 0 0;
    flex: 1;
`;

const NavItem = styled.li<{ active?: boolean }>`
    margin: 4px 0;

    a {
        display: block;
        padding: 12px 20px;
        text-decoration: none;
        color: ${({ active }) => (active ? 'var(--button-bg, #0058cc)' : 'var(--sidebar-text, #1c1c1e)')};
        font-weight: ${({ active }) => (active ? 600 : 400)};
        background-color: ${({ active }) => (active ? 'rgba(0, 88, 204, 0.08)' : 'transparent')};
        border-left: ${({ active }) => (active ? '4px solid var(--button-bg, #0058cc)' : '4px solid transparent')};
        transition: background 0.2s, border 0.2s;

        &:hover {
            background-color: rgba(var(--center-channel-color-rgb, 0, 0, 0), 0.04);
        }
    }
`;

const StyledLink = styled(Link)`
    display: block;
    width: 100%;
`;

export default Sidebar;
