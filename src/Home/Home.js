import react from 'react'
import { View,Button ,TouchableOpacity,Text,StyleSheet} from 'react-native'
const Home=(props)=>{
    return(
        <View style={{flex:1}}>
              <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{marginTop:'20%',flexDirection:'row',marginHorizontal:20}}>
           <Text style={{fontSize:30}}>←</Text>
        </TouchableOpacity>
            <View style={{ width: '100%',
      height: '70%',
      justifyContent: 'center',
      alignItems: 'center'}}>
        <TouchableOpacity style={styles.button}  onPress={() => props.navigation.navigate('List')}>
      <Text style={styles.text}>    List Screen   </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}  onPress={() => props.navigation.navigate('Detail')}>
      <Text style={styles.text}>  Detail Screen </Text>
    </TouchableOpacity> 
     <TouchableOpacity style={styles.button}  onPress={() => props.navigation.navigate('Add')}>
      <Text style={styles.text}>    Add Screen   </Text>
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
export default Home;