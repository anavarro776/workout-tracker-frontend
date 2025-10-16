import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getWorkouts } from '../api/workoutService';
import WorkoutCard from '../components/WorkoutCard';

export default function Dashboard() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log('Dashboard mounted');

  useEffect(() => {
     console.log('Fetching workouts...');

    getWorkouts()
      .then(res => {
          console.log('Workout data:', res.data);
        setWorkouts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching workouts:', err);

        setError('Failed to load workouts');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading workouts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="dashboard">
      <h1>Workout Dashboard</h1>
      <Link to="/workouts/new">➕ Create New Workout</Link>
      <ul>
        {workouts.map(workout => (
          <WorkoutCard key={workout.id} workout={workout} />

          
        ))}
      </ul>
    </div>
  );
}