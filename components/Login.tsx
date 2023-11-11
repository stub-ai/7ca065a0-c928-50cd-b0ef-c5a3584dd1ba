import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="p-4 bg-white rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Login</h2>
        <input type="email" placeholder="Email" className="mb-2 p-2 border border-gray-200 rounded w-full" />
        <input type="password" placeholder="Password" className="mb-2 p-2 border border-gray-200 rounded w-full" />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;