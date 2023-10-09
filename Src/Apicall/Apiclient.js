

//============without using refreshtoken ==========>

import axios from "axios";
var baseurl = ''

export const callApi = (url, requestdata) => {
    console.log("baseURL", baseurl + url, requestdata);
    const axiosInstance = axios.create({

        baseURL: baseurl + url,
        data: JSON.stringify(requestdata),
        headers: {
            'Content-Type': 'application/json'

        },
    });
    axiosInstance.interceptors.request.use(
        config => {
            config.headers['Authorization'] = `Bearer + token`;
            return config;
        },
        error => {
            console.log("error", error);
        }
    );
    //your response interceptor
    axiosInstance.interceptors.response.use(
        response => {
            console.log("Response", response);
            return response;
        },
        error => {

            console.log("error", error);

        }
    );
    return axiosInstance;

};
export default callApi;





















//Api call for dynamic token

// const callApi = (baseurl, contentType, requestdata, token) => {
//     const axiosInstance = axios.create({
//         baseURL: baseurl,
//         data: requestdata,
//         headers: {
//             'Content-Type': contentType,
//         },
//     });
//     axiosInstance.interceptors.request.use(
//         config => {
//             config.headers['Authorization'] = `Bearer + ${token}`;
//             return config;
//         },
//         error => {
//             console.log("error", error);
//         }
//     );
//     // your response interceptor
//     axiosInstance.interceptors.response.use(
//         response => {
//             return response;
//         },
//         error => {

//             console.log("error", error);

//         }
//     );
//     return axiosInstance;

// };
// export default callApi;






