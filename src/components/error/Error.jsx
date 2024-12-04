import React from 'react';

const Error = () => {
    return (
    <div className="text-center mt-20 md:mt-36 space-y-4 text-red-500 ">
        <h1 className="text-6xl font-bold">404</h1>
        <h1 className="text-5xl font-bold">Page Not Found</h1>
        <p className="text-2xl font-bold">Sorry, the page you are looking for does not exist.</p>
    </div>
    );
};

export default Error;