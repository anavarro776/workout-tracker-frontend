import React, { useState } from 'react';
import './WorkoutForm.css';

export default function WorkoutForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    duration: '',
    date: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.type.trim()) newErrors.type = 'Type is required';
    if (!formData.duration.trim()) newErrors.duration = 'Duration is required';
    if (!formData.date.trim()) newErrors.date = 'Date is required';
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    onSubmit(formData);
  };

  return (
    <form className="workout-form" onSubmit={handleSubmit}>
      <h2>Create Workout</h2>

      <label>Name:</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <label>Type:</label>
      <input
        name="type"
        value={formData.type}
        onChange={handleChange}
        required
      />
      {errors.type && <p className="error">{errors.type}</p>}

      <label>Duration:</label>
      <input
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        required
      />
      {errors.duration && <p className="error">{errors.duration}</p>}

      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      {errors.date && <p className="error">{errors.date}</p>}

      <label>Notes:</label>
      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
      />

      <button type="submit">Create Workout</button>
    </form>
  );
}