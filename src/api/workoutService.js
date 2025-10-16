import api from './axios';



export const getWorkouts = () => api.get('/workouts');
export const getWorkoutById = (id) => api.get(`/workouts/${id}`);
export const createWorkout = (userId, data) => api.post(`/workouts/user/${userId}`, data);
export const updateWorkout = (id, data) => api.put(`/workouts/${id}`, data);
export const deleteWorkout = (id) => api.delete(`/workouts/${id}`);