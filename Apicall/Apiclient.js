import axios from "axios";


const callApi = (baseurl, contentType, requestdata, token) => {
    const axiosInstance = axios.create({
        baseURL: baseurl,
        data: requestdata,
        headers: {
            'Content-Type': contentType,
        },
    });
    axiosInstance.interceptors.request.use(
        config => {
            config.headers['Authorization'] = `Bearer + ${token}`;
            return config;
        },
        error => {
            console.log("error", error);
        }
    );
    // your response interceptor
    axiosInstance.interceptors.response.use(
        response => {
            return response;
        },
        error => {

            console.log("error", error);

        }
    );
    return axiosInstance;

};
export default callApi;






























// const apiClient = axios.create({
//     baseURL: "",
//     method: '',

//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//     }
// });

// apiClient.interceptors.request.use(function (config) {

//     config.headers["Authorization"] = "Basic " + 'AXXXXXdsfdfdsfsAA';
//     return config;
// });
// export default apiClient;
// error => {
//     if (error.response.status == 403) {
//         console.log("error");
//     }
// }