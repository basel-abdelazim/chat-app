import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const correctEmail = 'user@example.com';
    const correctPassword = 'password123';

    if (email === correctEmail && password === correctPassword) {
      setError('');
      onLogin();
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleSignUp = () => {
    navigate('/signup'); // Navigate to Sign Up page
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password'); // Navigate to Forgot Password page
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-red-400 to-gray-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-6">
          <img
            src="pe.png"
            alt="Login Illustration"
            className="h-40 w-40"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign In</h2>

        {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <button
            onClick={handleSignUp}
            className="text-gray-600 hover:text-gray-800"
          >
            Sign Up
          </button> 
          | 
          <button
            onClick={handleForgotPassword}
            className="text-gray-600 hover:text-gray-800 ml-2"
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
