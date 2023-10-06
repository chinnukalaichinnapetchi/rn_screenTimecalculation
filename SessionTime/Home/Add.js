
import React, { useEffect, useState } from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import callApi from '../../Apicall/Apiclient';
import axios from 'axios';


const Add = (props) => {
  useEffect(() => {
    // getApi()
    postapi()
  }, [])
  const getApi = async () => {
    //axios.get('https://api.publicapis.org/entries').then((res) => console.log(res))
    var res = await callApi('https://api.publicapis.org/entries', 'application/json').get()
    console.log(res.data.count, "ressss");
  }


  const postapi = async () => {
    let _data = {
      title: "foo",
      body: "bar",
      userId: 1
    }

    var res = await callApi('https://jsonplaceholder.typicode.com/posts', 'application/json; charset=UTF-8', _data).post()
    console.log(res.data, "ress");
  }
  return (
    <>
      <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginTop: '20%', flexDirection: 'row', marginHorizontal: 20 }}>
        <Text style={{ fontSize: 30 }}>←</Text>
      </TouchableOpacity>
      <View
        style={{
          justifyContent: 'center',

          height: '70%',
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: "black",
            fontSize: 20,
          }}>
          ADD
        </Text>
      </View>
    </>
  );
};
export default Add;