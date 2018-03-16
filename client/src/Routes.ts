const USER_ROOT = '/api/user';
const user = {
    get: {
        id: (id: string) => { return `${USER_ROOT}/${id}`; },
        mentors: (id: string) => { return `${USER_ROOT}/${id}/mentors`; },
        mentees: (id: string) => { return `${USER_ROOT}/${id}/mentees`; },
        interests: (id: string) => { return `${USER_ROOT}/${id}/interests`; },
        getsession: (id: string) => { return `${USER_ROOT}/${id}/getsession`; },
        camp: (id: string) => { return `${USER_ROOT}/${id}/camp`; },
        all: (id: string) => { return `${USER_ROOT}/${id}/all`; }
    },
    post: {
        user: () => { return `${USER_ROOT}`; }
    }
};

export const routes = {
    user: user
};