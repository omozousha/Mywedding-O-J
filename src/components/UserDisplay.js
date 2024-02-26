// UserDisplay.js

import React, { useEffect } from 'react';

const UserDisplay = () => {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const encodedUsername = urlParams.get('username');
        const decodedUsername = encodedUsername ? decodeURIComponent(encodedUsername) : null;
        const usernameTypewriter = document.getElementById('username-typewriter');

        if (decodedUsername) {
            // Split the username into two words
            const [firstName, lastName] = decodedUsername.split(' ');

            // Display the two words
            usernameTypewriter.textContent = `${firstName} ${lastName}`;
        } else {
            usernameTypewriter.textContent = 'We invite you to celebrate our wedding';
        }
    }, []);

    return (
        <div>
            <h1 style={{ fontSize: '1.5rem', fontFamily: 'Stint Ultra Condensed, cursive', textShadow: '0 0 5px white' }}>
                <span id="username-typewriter"></span>
            </h1>
        </div>
    );
};

export default UserDisplay;