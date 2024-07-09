let loginedSessionID = '';
let adminLoginedSessionID = '';

// USER SESSION
export const getLoginedSessionID = () => {
    console.log('[session] getLoginedSessionID()');

    return loginedSessionID;

}

export const setLoginedSessionID = (id = '') => {
    console.log('[session] setLoginedSessionID()');
    
    loginedSessionID = id;

}

// ADMIN SESSION
export const getAdminLoginedSessionID = () => {
    console.log('[session] getAdminLoginedSessionID()');
    return adminLoginedSessionID;

}

export const setAdminLoginedSessionID = (id = '') => {
    console.log('[session] setAdminLoginedSessionID()');
    adminLoginedSessionID = id;

}