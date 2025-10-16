import api from './axios';

export const getExercisesByWorkout = (workoutId) =>
  api.get(`/exercises/workout/${workoutId}`);

export const createSimpleExercise = (exercise) =>
  api.post('/exercises/simple', exercise);

export const createExerciseWithSets = (dto) =>
  api.post('/exercises/with-sets', dto);