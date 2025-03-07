import axios from 'axios'
const BASE_URL = 'http://localhost:3003'

export const getAllData = async () => {
    try {
        const response = await axios.get(BASE_URL, { withCredentials: true });
        return response;
    } catch (error) {
        return error.response;
    }
};

