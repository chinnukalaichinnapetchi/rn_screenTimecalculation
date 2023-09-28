
import React, { useRef, useState } from 'react';

///Session time
import Home from './SessionTime/Home/Home';
import Profile from './SessionTime/Profile/Profile';
import Main from './SessionTime/Main';
import List from './SessionTime/Home/List';
import Detail from './SessionTime/Home/Details';
import Add from './SessionTime/Home/Add';
import Setting from './SessionTime/Profile/Setting';
import Logout from './SessionTime/Profile/logout';
import Profiledetail from './SessionTime/Profile/Profiledetail';




import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Alert } from 'react-native';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
var array = [];

const App = () => {


  const navigationRef = useRef();
  const routeNameRef = useRef();

  return (
    <NavigationContainer ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const nextRoutename = navigationRef.current.getCurrentRoute().name;
        const routestartname = navigationRef.current.getState().routes[0].name

        console.log(previousRouteName, nextRoutename, routestartname);
        AsyncStorage.setItem('screen', previousRouteName)

        if (routestartname !== nextRoutename) {

          var obj = { time: new Date() }
          array.push(obj)
          //console.log("klkl" ,array,moment(new Date()).format('YYYY/MM/DD HH:mm:ss'));

        } else if (routestartname === nextRoutename) {
          let a = moment(new Date())
          let b = moment(array[0].time)
          var diff = a.diff(b, 'seconds')

          AsyncStorage.setItem('sntime', diff.toString())
          // console.log(array,"array")
          // console.log(moment(new Date()).format('YYYY/MM/DD HH:mm:ss'),moment(array[0].time).format('YYYY/MM/DD HH:mm:ss'))
          console.log(diff, 'seconds')
          array = [];


        }
        routeNameRef.current = nextRoutename;
      }}>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Main"
          component={Main}


        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='List' component={List} />
        <Stack.Screen name='Detail' component={Detail} />
        <Stack.Screen name='Add' component={Add} />
        <Stack.Screen name='Logout' component={Logout} />
        <Stack.Screen name='Setting' component={Setting} />
        <Stack.Screen name='Profiledetail' component={Profiledetail} />

      </Stack.Navigator>
    </NavigationContainer>

  );
};
export default App;