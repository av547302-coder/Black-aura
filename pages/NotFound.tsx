import React from 'react';
import { Button } from '../components/UI';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="font-serif text-9xl font-bold text-yellow-600 opacity-20 select-none">404</h1>
      <div className="-mt-12 relative z-10">
        <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The property you are looking for might have been sold or the page has been moved.
        </p>
        <Button to="/">Return Home</Button>
      </div>
    </div>
  );
};

export default NotFound;