import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const toggleForm = () => setIsLogin(!isLogin);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isLogin ? 'http://localhost:3000/login' : 'http://localhost:3000/register';
      const { data } = await axios.post(url, formData);
      setMessage(data.message);

      if (isLogin && data.message === 'Login successful!') {
        setLoggedIn(true); // Notificar a App que el usuario inició sesión
      }
    } catch (error) {
      setMessage(error.response ? error.response.data.error : 'An error occurred.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="bg-gray-900 p-6 rounded-lg shadow-md w-80">
        <h2 className="text-white text-center mb-4">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="block w-full px-4 py-2 mb-3 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="block w-full px-4 py-2 mb-3 rounded bg-gray-700 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-green-600 py-2 rounded text-white hover:bg-green-500 transition">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        <p className="text-white text-center mt-4 cursor-pointer" onClick={toggleForm}>
          {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Sign In'}
        </p>
        {message && <p className="text-red-500 text-center mt-3">{message}</p>}
      </div>
    </div>
  );
};

export default Login;

