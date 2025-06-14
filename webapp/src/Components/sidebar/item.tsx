// Copyright (c) 2020-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {NavLink} from 'react-router-dom';

import styled, {css} from 'styled-components';
import Tooltip from '../widgets/tooltip';

// import Tooltip from 'src/Components/widgets/tooltip';

// import {DotMenuButton} from 'src/Components/dot_menu';

interface ItemProps {
    icon: string;
    itemMenu?: React.ReactNode;
    id: string;
    display_name: string;
    className: string;
    areaLabel: string;
    link: string;
    isCollapsed: boolean;
}

const Item = (props: ItemProps) => {
    return (
        <ItemContainer
            $isCollapsed={props.isCollapsed}
            data-testid={props.display_name}
        >
            {!props.isCollapsed &&
                <StyledNavLink
                    className={props.className}
                    id={`sidebarItem_${props.id}`}
                    aria-label={props.areaLabel}
                    to={props.link}
                >
                    <Tooltip
                        id={`sidebarTooltip_${props.id}`}
                        content={props.display_name}
                    >
                        <NameIconContainer
                            id={`sidebarItem_${props.id}`}
                        >
                            <ItemDisplayLabel>
                                {props.display_name}
                            </ItemDisplayLabel>
                        </NameIconContainer>
                    </Tooltip>
                    {<HoverMenu>{props.itemMenu}</HoverMenu>}
                </StyledNavLink>
            }
        </ItemContainer>
    );
};

export const ItemDisplayLabel = styled.span`
    overflow: hidden;
    max-width: 100%;
    height: 18px;
    font-size: 14px;
    line-height: 18px;
    text-align: justify;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Icon = styled.i`
    margin: 0 6px 0 -2px;
    font-size: 18px
`;

export const ItemContainer = styled.li<{$isCollapsed?: boolean}>`
    display: flex;
    height: 32px;
    align-items: center;
    list-style-type: none;
    transition: height 0.18s ease;

    ${(props) => props.$isCollapsed && css`
        height: 0;
    `};
`;

export const StyledNavLink = styled(NavLink)`
    &&& {
        position: relative;
        display: flex;
        width: 240px;
        height: 32px;
        align-items: center;
        padding: 7px 16px 7px 19px;
        border-top: 0;
        border-bottom: 0;
        margin-right: 0;
        color: rgba(var(--sidebar-text-rgb), 0.72);
        font-size: 14px;
        text-decoration: none;

        &:hover,
        &:focus {
            text-decoration: none;
        }

        &:hover,
        &:focus-visible {
            background: var(--sidebar-text-hover-bg);
        }

        &.active {
            background: rgba(var(--sidebar-text-rgb), 0.16);
            color: rgba(var(--sidebar-text-rgb), 1);

            &::before {
                position: absolute;
                top: 0;
                left: -2px;
                width: 4px;
                height: 100%;
                border-radius: 4px;
                background: var(--sidebar-text-active-border);
                content: "";
            }
        }

     
    }
`;

const HoverMenu = styled.div`
    position: absolute;
    right: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const NameIconContainer = styled.div`
    display: flex;
    overflow: hidden;
    align-items: center;
`;

export default Item;
