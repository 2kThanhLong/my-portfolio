import React from "react";

export const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Page Not Found
      </h2>
      <p className="mb-8 max-w-md">
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>
      <a
        href="/"
        className="custom-button">
        Back to Home
      </a>
    </div>
  );
};
