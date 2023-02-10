
const API_URL = 'http://localhost:3333';

// Get all objects from API/Database
export async function getUsersFromServer() {
    const response = await fetch(`${API_URL}/users`);
    const data = response.json();
    return data;
}

// Get login token to sign in
export async function getLoginToken(email, password) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    const data = await response.json();
    return data;
}

// Get signup info to create user in users table
export async function createNewUser(name, email, password, username) {
    const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password,
            username
        })
    });
    const data = await response.json();
    return data;
}


// Get notification information from database according to user.
export async function getUserNotifications() {
    const response = await fetch(`${API_URL}/notifications`, {
        headers: {
            "content-type": "application/json",
            "x-token": localStorage.getItem('TWITTER_TOKEN')
        }
    })
    const data = await response.json()
    return data;
}

export async function createNewRemembrall(type, time, lng, lat, slidervalue, message, checkedPush, checkedSound) {
    const response = await fetch(`${API_URL}/setremembrall`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "x-token": localStorage.getItem('TWITTER_TOKEN')
        },
        body: JSON.stringify({
            type,
            data: {
                time,
                lng, lat,
                slidervalue,
                message,
                checkedPush,
                checkedSound
            }
        })
    });
    const data = await response.json();
    return data;
}