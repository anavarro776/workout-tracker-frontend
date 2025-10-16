import React from 'react';
import { Link } from 'react-router-dom';
import './WorkoutCard.css';

export default function WorkoutCard({ workout }) {
  return (
    <div className="workout-card">
      <h3>{workout.name}</h3>
      <p><strong>Type:</strong> {workout.type}</p>
      <p><strong>Date:</strong> {workout.date}</p>
      <p><strong>Duration:</strong> {workout.duration}</p>
      {workout.notes && <p><strong>Notes:</strong> {workout.notes}</p>}
      <Link to={`/workouts/${workout.id}`}>View Details</Link>
    </div>
  );
}