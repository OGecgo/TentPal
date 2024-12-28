import React, { useEffect, useState } from 'react';

const Login = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Используем переменную из .env
        const apiUrl = process.env.REACT_APP_API_URL;

        fetch(`${apiUrl}/users`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Ошибка загрузки данных:', error));
    }, []);

    return (
        <div>
            <h1>Данные:</h1>
            {data ? (
                <ul>
                    {data.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Загрузка...</p>
            )}
        </div>
    );
};

export default Login;
