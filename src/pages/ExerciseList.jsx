import { useEffect, useState } from 'react';
import { getExercisesByWorkout } from '../api/exerciseService';
import ExerciseCard from '../components/ExerciseCard';

export default function ExerciseList({ workoutId }) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    getExercisesByWorkout(workoutId)
      .then(res => setExercises(res.data))
      .catch(err => console.error('Error fetching exercises:', err));
  }, [workoutId]);

  return (
    <div>
      <h2>Exercises</h2>
      {exercises.length === 0 ? (
        <p>No exercises found.</p>
      ) : (
        exercises.map(ex => (
          <ExerciseCard key={ex.id} exercise={ex} />
        ))
      )}
    </div>
  );
}