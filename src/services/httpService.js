import axios from 'axios'
import logger from './logService'
import { toast } from 'react-toastify'

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500
    console.log(error)
    if (!expectedError) {
        logger.log(error)
        toast.error("unexpected error occurred")
    }
    return Promise.reject(error);
})

const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
}

export default httpService;