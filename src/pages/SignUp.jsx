import { useState } from 'react';
import { registerUser } from '../api/userService';

export default function SignUp() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await registerUser(form);
      alert('User registered successfully!');
    } catch (err) {
      console.error('Registration error:', err);
      alert('Registration failed.');
    }
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}