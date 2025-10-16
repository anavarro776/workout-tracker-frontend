import api from './axios';

export const registerUser = (userData) => api.post('/users/register', userData);