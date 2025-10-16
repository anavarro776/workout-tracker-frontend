import { useNavigate } from 'react-router-dom';
import WorkoutForm from '../components/WorkoutForm';
import { createWorkout } from '../api/workoutService';

export default function CreateWorkout() {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    try {
      await createWorkout(1, formData); // Replace `1` with dynamic user ID if needed
      navigate('/');
    } catch (err) {
      console.error('Failed to create workout:', err);
    }
  };

  return (
    <div>
      <h1>Create New Workout</h1>
      <WorkoutForm onSubmit={handleCreate} />
    </div>
  );
}