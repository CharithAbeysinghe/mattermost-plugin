// UserRoleList.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

type User = {
    id: string;
    username: string;
};

type RoleAssignment = {
    [userId: string]: string;
};

type Props = {
    users: User[];
    roles: string[];
    onSave: (assignedRoles: RoleAssignment) => void;
};

const UserRoleList: React.FC<Props> = ({ users, roles, onSave }) => {
    const [assignedRoles, setAssignedRoles] = useState<RoleAssignment>({});

    const handleChange = (userId: string, role: string) => {
        setAssignedRoles(prev => ({ ...prev, [userId]: role }));
    };

    const handleSubmit = () => {
        onSave(assignedRoles);
    };

    return (
        <div>
            <UserList>
                {users.map(user => (
                    <UserRow key={user.id}>
                        <span>{user.username}</span>
                        <select
                            value={assignedRoles[user.id] || ''}
                            onChange={(e) => handleChange(user.id, e.target.value)}
                        >
                            <option value="">Select role</option>
                            {roles.map(role => (
                                <option key={role} value={role}>
                                    {role}
                                </option>
                            ))}
                        </select>
                    </UserRow>
                ))}
            </UserList>

            <Footer>
                <button onClick={handleSubmit} className="btn btn-primary">Save</button>
            </Footer>
        </div>
    );
};

export default UserRoleList;

// Styled components
const UserList = styled.div`
    margin-top: 16px;
`;

const UserRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Footer = styled.div`
    margin-top: 24px;
    text-align: right;
`;
