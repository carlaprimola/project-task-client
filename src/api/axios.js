import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://project-task-server-4.onrender.com/api',
    withCredentials: true
})

export default instance;