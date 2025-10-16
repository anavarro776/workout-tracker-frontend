import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import CreateWorkout from '../pages/CreateWorkout';
import WorkoutDetail from '../pages/WorkoutDetail';
import EditWorkout from '../pages/EditWorkout';
import ExerciseList from '../pages/ExerciseList';
import SignUp from '../pages/SignUp';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/workouts/new" element={<CreateWorkout />} />
        <Route path="/workouts/:id" element={<WorkoutDetail />} />
        <Route path="/workouts/:id/edit" element={<EditWorkout/>}/>
        <Route path="/workouts/:id/exercises" element={<ExerciseList workoutId={1} />} />
        <Route path="/signup" element={<SignUp />} />




      </Routes>
    </Router>
  );
}