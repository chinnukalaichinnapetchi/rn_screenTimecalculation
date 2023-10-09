import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useState } from "react";
import Apicall from "../Apicall/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
const Login = (props) => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

    const loginApi = async () => {

        let data = {
            "email": email,
            "userpassword": password
        }
        var startime = moment(new Date()).format("YYYY:MM:DD  HH:mm:ss")
        console.log("-------tokengenerate time---------------",startime);
        var res = await Apicall.post('login', data)
        //console.log("res--------------->",res);
        AsyncStorage.setItem('accessToken', res.data.tokens.accessToken)

        AsyncStorage.setItem("refreshtoken", res.data.tokens.refreshToken)
       
       
        props.navigation.navigate('Homepage')
        // setPassword('')
        // setemail('')

    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter Email"
                value={email}
                onChangeText={setemail}
            />
            {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}

            <TextInput
                style={styles.input}
                placeholder="Enter Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

            <Button title="Login" onPress={loginApi} />
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontSize: 18,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    }
});

export default Login;

























    // const validateForm = () => {
    //     let newErrors = { email: '', password: '' };
    //     props.navigation.navigate('Homepage')
        
    //     if (!email.trim()) newErrors.email = 'Email id  is required.';
    //     if (!password.trim()) newErrors.password = 'Password is required.';


    //     setErrors(newErrors);

    //     // If no errors, proceed with the login logic
    //     if (!newErrors.email && !newErrors.password) {
    //         //loginApi()
    //     }
    // };