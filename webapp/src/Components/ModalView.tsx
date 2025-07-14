// components/ModalView.tsx

import React, { ReactNode } from 'react';
import styled from 'styled-components';

type ModalViewProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    footer?: ReactNode;
    width?: string;
};

const ModalView: React.FC<ModalViewProps> = ({
    isOpen,
    onClose,
    title = '',
    children,
    footer,
    width = '480px',
}) => {
    if (!isOpen) return null;

    return (
        <Overlay>
            <Container style={{ width }}>
                <Header>
                    <h3>{title}</h3>
                    <CloseButton onClick={onClose}>&times;</CloseButton>
                </Header>
                <hr />

                <Body>{children}</Body>

                {footer && <Footer>{footer}</Footer>}
            </Container>
        </Overlay>
    );
};

const Overlay = styled.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.32);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const Container = styled.div`
    background: var(--center-channel-bg);
    color: var(--center-channel-color);
    border-radius: 8px;
    padding: 20px;
    box-shadow: var(--elevation-4);
    max-height: 90vh;
    overflow-y: auto;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
        margin: 0;
        font-size: 18px;
    }
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--center-channel-color);
`;

const Body = styled.div`
    margin-top: 12px;
`;

const Footer = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`;


export default ModalView;
