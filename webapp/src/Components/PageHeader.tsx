import React from 'react';
import styled from 'styled-components';

type PageHeaderProps = {
    title: string;
    subtitle?: string;
};

const Container = styled.div`
    margin-bottom: 24px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(var(--center-channel-color-rgb), 0.12);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 600;
    color: var(--center-channel-color);
    margin: 0;
`;

const Subtitle = styled.p`
    font-size: 14px;
    color: rgba(var(--center-channel-color-rgb), 0.64);
    margin: 4px 0 0;
`;

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => (
    <Container>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
);

export default PageHeader;
