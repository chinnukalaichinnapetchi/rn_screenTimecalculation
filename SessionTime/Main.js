import react, { useState ,useCallback,useEffect} from 'react'
import { View,StyleSheet,Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
const Main=(props)=>{
  const [time,settime]=useState('')
  const [screen,setscreen]=useState('')
  useFocusEffect(
    useCallback(() => {
      async function fetchData() {
        await AsyncStorage.getItem('sntime').then((res)=>{
          //console.log(res);
        })
        var times=await AsyncStorage.getItem('sntime')
        var screens=await AsyncStorage.getItem('screen')
        console.log("timestimestimes",times);
        settime(times)
        setscreen(screens)
      }
    
        fetchData();
  
    
    }, [props])
  );

    return(
        <View style={[styles.container]}>
<View style={{marginTop:'20%'}}>
   <Text style={[styles.sectionTitle,{marginHorizontal:20}]}>Last session :  {screen}</Text>
  <Text style={[styles.sectionTitle,{marginHorizontal:20}]}>Last seen  :   {time} seconds ago</Text>
            <View style={[styles.viewsty]}>
            <TouchableOpacity  onPress={()=>{props.navigation.navigate('Home')}}style={[styles.card]}>
            <Text style={styles.sectionTitle}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{props.navigation.navigate('Profile')}}style={[styles.card]}>
            <Text style={styles.sectionTitle}>Profile</Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        alignItems: 'center', // Centered horizontally
      },
      viewsty:{
flexDirection:'row',
justifyContent:'space-between'
      },
    card: {
      shadowColor: 'black',
      shadowOffset: { width: '20%', height: 8 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 8,
      backgroundColor: '#f18484',
      padding: 50,
      borderRadius: 10,
      marginTop:'10%',
      marginHorizontal:20
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
      },
  });
export default Main;