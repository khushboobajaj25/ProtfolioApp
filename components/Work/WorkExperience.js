import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'


import Window from '../Common/Window'


export default function WorkExperience({navigation}) {
    return (
        <View>
            <Text style={styles.title}>Work Experience</Text>
          <View style={styles.container}>
              <TouchableOpacity onPress={()=>navigation.navigate("Details",{index:0,title:"Company"})}>
                <Window title="Sparks Foundation">
                    <Image source={require('../../assets/sparkslogo.png')} style={{width:80, height:80}}/>
                </Window>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate("Details",{index:1, title:"Company"})}>
                 <Window title="Lets Grow More">
                 <Image source={require('../../assets/lgmlogo.png')} style={{width:80, height:80}}/>
                </Window>
              </TouchableOpacity>
              </View>
            <View style={styles.container}>
              <TouchableOpacity onPress={()=>navigation.navigate("Details",{index:2,title:"Company"})}>
                <Window title="ASCENTech">
                    <Image source={require('../../assets/ascentech.jpg')} style={{width:80, height:80}}/>
                </Window>
              </TouchableOpacity>
             
            </View>
                    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // width: 124,
        // height: 124,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginRight: 20,
        // marginTop:  20,

        


    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: 30,
        textAlign: 'center',
        color:"white",
       borderBottomWidth: 1,
        borderRadius: 8,
        borderBottomColor:"#4682B4",

    }
})