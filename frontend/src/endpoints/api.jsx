import axios from 'axios'
const BASE_URL = 'http://127.0.0.1:8000/api/'

const LOGIN_URL = `${BASE_URL}token/`
export const login = async (username, password) => {
    const response = await axios.post(LOGIN_URL, { username: username, password: password }, { withCredentials: true })
    return response.data.success
}

const REFRESH_URL = `${BASE_URL}token/refresh/`;

export const refresh_token = async () => {
    try {
        await axios.post(REFRESH_URL, {}, { withCredentials: true });
        return true; 
    } catch (error) {
        console.error("Token refresh failed", error);
        return false; 
    }
};

const TASK_URL = `${BASE_URL}tasks/`;
export const get_tasks = async () => {
    try {
        const response = await axios.get(TASK_URL, { withCredentials: true });
        return response.data;
    } catch (error) {
        return call_refresh(error, () => axios.get(TASK_URL, { withCredentials: true }));
    }
};



const call_refresh = async (error, func) => {
    if (error.response && error.response.status === 401) {
        const tokenRefreshed = await refresh_token(); 
        if (tokenRefreshed) {
            const retryResponse = await func(); 
            return retryResponse.data
        }
    }
    return false
}
