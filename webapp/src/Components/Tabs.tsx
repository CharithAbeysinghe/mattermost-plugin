// components/Tabs.tsx
import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';

type Tab = {
    label: string;
    content: ReactNode;
};

type TabsProps = {
    tabs: Tab[];
};

const TabList = styled.div`
    display: flex;
    border-bottom: 1px solid rgba(var(--center-channel-color-rgb), 0.2);
`;

const TabButton = styled.button<{ active: boolean }>`
    flex:1;
    padding: 12px 16px;
    cursor: pointer;
    background: ${props => props.active ? '#FFBC1F14' : 'transparent'};
    border: none;
    border-bottom: 2px solid ${props => props.active ? 'var(--button-bg)' : 'transparent'};
    color: ${props => props.active ? 'var(--button-bg)' : 'var(--center-channel-color)'};
    font-weight: ${props => props.active ? 'bold' : 'normal'};

    &:hover {
        background-color: rgba(var(--center-channel-color-rgb), 0.05);
    }
`;

const TabContent = styled.div`
    padding: 16px 0;
`;

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <TabList>
                {tabs.map((tab, index) => (
                    <TabButton
                        key={index}
                        active={index === activeIndex}
                        onClick={() => setActiveIndex(index)}
                    >
                        {tab.label}
                    </TabButton>
                ))}
            </TabList>
            <TabContent>
                {tabs[activeIndex].content}
            </TabContent>
        </div>
    );
};

export default Tabs;
