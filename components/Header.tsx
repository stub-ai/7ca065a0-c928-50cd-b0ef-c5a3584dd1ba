import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <Link href="/">
        <a className="text-lg font-semibold">Job Media Platform</a>
      </Link>
      <nav>
        <Link href="/login">
          <a className="text-sm text-gray-500 hover:text-gray-700">Login</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;