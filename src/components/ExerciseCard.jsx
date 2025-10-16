export default function ExerciseCard({ exercise }) {
  return (
    <div className="exercise-card">
      <h3>{exercise.name}</h3>
      <p>Type: {exercise.type}</p>
      <p>Sets: {exercise.sets?.length || 0}</p>
    </div>
  );
}