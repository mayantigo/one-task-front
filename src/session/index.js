export const logged = () => localStorage.getItem('token') !== undefined;

export const token = () => localStorage.getItem('token');
