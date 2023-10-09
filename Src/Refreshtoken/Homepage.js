import React, { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { View, Text, FlatList, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import Apicall from "../Apicall/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
AsyncStorage
const Homepage = (props) => {
    const [data, setData] = useState([]);
    const [loaading, setloading] = useState(false)
    const [listshow, setlistShow] = useState(false)
    const renderItem = ({ item }) => {
        return (
            <View style={styles.listItem}>
                <Text style={{ color: 'white', fontSize: 16 }}>{item.text}</Text>
            </View>
        );
    };
    // useEffect(() => {
    //     getApi()
    // }, [])
    const getApi = async () => {

        var startime = moment(new Date()).format("YYYY:MM:DD  HH:mm:ss")
        console.log(startime);

        var res = await Apicall.get('getPost')
        if (res.status === 200) {
            setData(res.data)
        } else {
            setloading(false)
        }
        //console.log(res.status, "res");


        // Apicall.get('getPost').then((res) => {
        //     setData(res.data)
        // }).catch((err) => {
        //     // Alert.alert('Alert', 'Your Login token  is Expired Login Again.', [

        //     //     { text: 'OK', onPress: () => props.navigation.navigate('Login') },
        //     // ]);
        //     console.log(err, "res");
        // })


    }

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 20 }}>
                <Button title="Get PostList" onPress={() => { setlistShow(true), getApi() }} />

            </View>

            {loaading == true ? <ActivityIndicator size={"small"} color="green" /> : listshow ?
                <View>
                    <Text style={styles.title}>Post list</Text>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        render
                    />
                </View>
                : null}


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    listItem: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        marginTop: 10,
        backgroundColor: 'green'
    }
});
export default Homepage;