import react from 'react'
import { View,Button ,TouchableOpacity,Text,StyleSheet} from 'react-native'
const Profile=(props)=>{
    return(
        <View style={{flex:1}}>
              <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{marginTop:'20%',flexDirection:'row',marginHorizontal:20}}>
           <Text style={{fontSize:30}}>←</Text>
        </TouchableOpacity>
            <View style={{ width: '100%',
      height: '70%',
      justifyContent: 'center',
      alignItems: 'center'}}>
           <TouchableOpacity style={styles.button}  onPress={() => props.navigation.navigate('Profiledetail')}>
      <Text style={styles.text}>  Profile Detail </Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.button}  onPress={() => props.navigation.navigate('Setting')}>
      <Text style={styles.text}>Setting Screen</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}  onPress={() => props.navigation.navigate('Logout')}>
      <Text style={styles.text}>Logout Screen</Text>
    </TouchableOpacity>    
      
      </View>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#ce84f1',
      marginTop:20
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
export default Profile;