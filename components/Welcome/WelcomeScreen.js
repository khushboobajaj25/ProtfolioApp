import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Window from '../Common/Window';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Project({navigation}) {
    
    return (
       <View>
           <Text style={styles.title}>Welcome</Text>
          <View style={styles.container}>
              <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                <Window title="Profile">
                    <Ionicons name="person" size={80} color="#023047" />
                </Window>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate("Education")}>
                 <Window title="Education">
                    <Ionicons name="school" size={80} color="#023047" />
                </Window>
              </TouchableOpacity>
                    

          </View>
          <View style={styles.container}>
              <TouchableOpacity onPress={()=>navigation.navigate("Skills")}>

                <Window title="Skills">
                <MaterialIcons name="computer" size={80} color="#023047" />
                </Window>
              </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("Project")}>
                    <Window title="Project">
                    <MaterialCommunityIcons name="github" size={80} color="#023047" />
                    </Window>   
                </TouchableOpacity>

          </View>
          <View style={styles.container}>
                <TouchableOpacity onPress={()=>navigation.navigate("Work")}>
                    <Window title="Work Experience">
                    <FontAwesome name="building" size={80} color="#023047" />
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


