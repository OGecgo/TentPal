import React, { useEffect } from 'react';

const Login = () => {
    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL;

        fetch(`${apiUrl}`)
            .then((response) => response.json())
            .catch((error) => console.error('Error downloading data:', error));
    }, []);

    return (
        <div>
            <h1>Data:</h1>
            <p>Download...</p>
        </div>
    );
};

export default Login;
