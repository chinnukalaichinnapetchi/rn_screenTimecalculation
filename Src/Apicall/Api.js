import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { navigationRef } from "../App";

//<===========Server url localhost============>
//var baseurl = 'http://127.0.0.1:3000/api/users/'

//<==============for axios network error--> android simulator 10.0.2.2 using insteed of localhost============>
var baseurl = 'http://10.0.2.2:3000/api/users/'


const Apicall = axios.create({
    baseURL: baseurl,
});

//<===========for navigation  to login page without using  navigation props=========>
const login = () => {
    console.log(navigationRef);
    navigationRef.current?.navigate('Login');
}


Apicall.interceptors.request.use(
    async (config) => {

        const token = await AsyncStorage.getItem('accessToken');

        if (token) {
            config.headers = {
                ...config.headers,
                authorization: `Bearer ${token}`,
            };
        }

        return config;
    },
    (error) => Promise.reject(error)
);

Apicall.interceptors.response.use(
    response => {
        return response;
    },
    async (error) => {
        const config = error?.config;


        if (error.response != undefined && error.response.status === 401) {



            //<=================for Alert session for referesh token==============>

            Alert.alert('Alert', 'Your Login token  is Expired Login Again.', [

                { text: 'OK', onPress: () => { login() }, },
            ]);



            //<=================for Auto generate refreshtoken enable blew lines(63-84)==============>

            // try {
            //     const refreshToken = await AsyncStorage.getItem('refreshtoken');
            //     const res = await axios.post(`${baseurl}getNewToken`, { refreshToken });
            //     config.sent = true;
            //     // AsyncStorage.
            //     //     AsyncStorage.setItem('accessToken', res.data.data.accessToken)
            //     // AsyncStorage.setItem('refreshtoken', res.data.data.refreshToken)


            //     if (res?.data?.data?.accessToken) {
            //         config.headers = {
            //             ...config.headers,
            //             authorization: `Bearer ${res.data.data.accessToken}`,
            //         };
            //     }
            //     // console.log(res.data.data, "---------------response--------------");

            //     return axios(config);
            // } catch (error) {
            //     console.log("res", error);

            // }
        }

        return Promise.reject(error);

    }
);
export default Apicall






















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






