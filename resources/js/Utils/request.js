import '@/bootstrap';
import { logging } from './logging';
// import { isLogged, setLogged } from '@/utils/auth';

let baseUrl = process.env.VUE_BASE_API
if (process.env.NODE_ENV === 'production')
{
    baseUrl = "https://otomotives.com/oscar/api"
}

const service = window.axios.create({
    baseURL: baseUrl,
    timeout: 50000, // Request timeout
});

// Request intercepter
service.interceptors.request.use(
    config => {
        // const token = isLogged();
        // if (token) {
        //   config.headers['Authorization'] = 'Bearer ' + isLogged(); // Set JWT token
        // }
        logging(config, 'axios config')

        return config;
    },
    error => {
        // Do something with request error
        console.log(error); // for debug
        Promise.reject(error);
    }
);

// response pre-processing
service.interceptors.response.use(
    response => {
        // if (response.headers.authorization) {
        //   setLogged(response.headers.authorization);
        //   response.data.token = response.headers.authorization;
        // }

        return response.data;
    },
    error => {
        logging(error, 'error request ')
        let message = error.message;
        if (error.response.data && error.response.data.errors)
        {
            message = error.response.data.errors;
        } else if (error.response.data && error.response.data.error)
        {
            message = error.response.data.error;
        }

        return Promise.reject(error);
    }
);

export default service;
