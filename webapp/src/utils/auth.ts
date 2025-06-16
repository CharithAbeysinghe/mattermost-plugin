//check current user roles
export type Role = 'admin' | 'user' | 'member';

type Permissions = {
    [key in Role] : {
        accessLink:boolean,
        myStatusUser:boolean,
    }
}

export const rolePermissions: Permissions = {

    admin:{
        accessLink: true,
        myStatusUser : false
    },
    user:{
        accessLink: true,
        myStatusUser : false
    },
    member:{
        accessLink: false,
        myStatusUser : true
    }
};

export const getPermissions = (role:Role) => {
    return rolePermissions[role];
}