import React, { useState } from 'react';
import ModalView from '../ModalView';
import UserRoleList from './UserRoleList';

// Sample test users
const testUsers = [
    { id: 'u1', username: 'john.doe' },
    { id: 'u2', username: 'jane.smith' },
    { id: 'u3', username: 'charlie.brown' },
    { id: 'u4', username: 'alice.wonder' },
    { id: 'u5', username: 'bob.builder' },
];

const RoleAssignment = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button className='btn btn-primary' onClick={() => setShowModal(true)}>
                Open Modal
            </button>

            {showModal && (
                <ModalView isOpen={true} onClose={handleClose} title='Assign Roles'>
                    <UserRoleList
                        users={testUsers}
                        roles={['Admin', 'Manager', 'Viewer']}
                        onSave={(assignedRoles) => {
                            console.log('Assigned roles:', assignedRoles);
                            handleClose();
                        }}
                    />
                </ModalView>
            )}
        </div>
    );
};

export default RoleAssignment;
