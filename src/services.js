import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.github.com/users/",
    headers: {
        "Content-Type": "application/json",
    },
    json: true
});

export const api = {
    get(endpoint) {
        return axiosInstance.get(endpoint);
    }
};