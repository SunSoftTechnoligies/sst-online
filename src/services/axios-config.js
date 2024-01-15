import axios from 'axios';

// let baseURL = "https://sst-backend.onrender.com";
let baseURL = "http://localhost:3005";

const publicReq = axios.create({ baseURL });

const privateReq = axios.create({
    baseURL,
    withCredentials: true,

});

const token = localStorage.getItem("token");
console.log("Token:", token);
privateReq.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export { publicReq, privateReq };
