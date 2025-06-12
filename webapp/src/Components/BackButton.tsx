import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
    const history = useHistory();

    return (
        <button
            onClick={() => history.goBack()}
            style={{
                padding: '8px 16px',
                backgroundColor: 'var(--button-bg)',
                color: 'var(--button-color)',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginBottom: '16px',
            }}
        >
            ← Back
        </button>
    );
};

export default BackButton;
