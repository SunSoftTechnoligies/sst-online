import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Loginad() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const fixedEmail = 'admin@gmail.com';
    const fixedPassword = 'admin123';

    if (email === fixedEmail && password === fixedPassword) {
      alert("You have logged in successfully")
      navigate('/admin/adminpanel');

    } else {
      alert('Invalid email or password');
    }
  };

  return (
<div className="flex min-h-screen justify-center items-center bg-gray-100">
<div className="bg-white rounded-md p-8 shadow-md w-96 h-200">
  <div className="flex items-center justify-center mb-4">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5D09120OZdxF8ithOFLEz9dtayESVVWsg69noZtuLsg&s"
      alt="Company Logo"
      className="h-16 w-16 rounded-full shadow-md"
    />
  </div>

  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-6 text-center text-xl font-bold leading-9 tracking-tight text-gray-900 mb-6">
      Log in to your account
    </h2>
  </div>

  <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email Address
        </label>
        <div className="mt-2">
        <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mt-4">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <a
            href="#forgot-password"
            className="text-indigo-600 text-sm font-medium hover:underline"
          >
            Forgot Password?
          </a>
        </div>
        <div className="mt-2">
        <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
        </div>
      </div>

      <div>
        <button
          type="button"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
          onClick={handleLogin}
        >
          Log in
        </button>
      </div>
    </form>
  </div>
</div>
</div>
  );
}

export default Loginad;
