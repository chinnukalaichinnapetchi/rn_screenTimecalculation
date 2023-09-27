
import React, { useEffect, useState } from 'react';

import { Text ,TouchableOpacity,View} from 'react-native';


const Setting = (props) => {
  return (
    <>
      <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{marginTop:'20%',flexDirection:'row',marginHorizontal:20}}>
           <Text style={{fontSize:30}}>←</Text>
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
              fontSize:20,
            }}>
            Setting
          </Text>
    </View>
    </>
  );
};
export default Setting;