const USER_ROOT = '/api/user';
const user = {
    get: {
        id: (id: string) => { return `${USER_ROOT}/${id}`; },
        mentors: (id: string) => { return `${USER_ROOT}/${id}/mentors`; },
        mentees: (id: string) => { return `${USER_ROOT}/${id}/mentees`; },
        interests: (id: string) => { return `${USER_ROOT}/${id}/interests`; },
        getsession: () => { return `${USER_ROOT}/0/getsession`; },
        logout: () => { return `${USER_ROOT}/0/logout`; },
        camp: (id: string) => { return `${USER_ROOT}/${id}/camp`; },
        all: (id: string) => { return `${USER_ROOT}/${id}/all`; }
    },
    post: {
        user: () => { return `${USER_ROOT}`; },
        login: () => { return `${USER_ROOT}/login`; }
    },
    put: {
        setmentor: () => { return `${USER_ROOT}/setmentor`; }
    }
};

const CAMP_ROOT = '/api/camp';

const camp = {
    get: {
        camps: () => { return CAMP_ROOT; }
    }
};

export const routes = {
    user: user,
    camp: camp
};