import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Window from './Window'
export default function ProjectWindows({navigation}) {
    return (
        <View>
            <Text style={styles.title}>Projects</Text>
          <View style={styles.container}>
              <TouchableOpacity onPress={()=>navigation.navigate("Projects",{index:0})}>
                <Window title="Banking System">
                    <FontAwesome name="bank" size={80} color="#023047" />
                </Window>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate("Projects",{index:1})}>
                 <Window title="Keep Notes">
                 <MaterialCommunityIcons name="google-keep" size={80} color="#023047" />
                </Window>
              </TouchableOpacity>
                    

          </View>
          <View style={styles.container}>
              <TouchableOpacity onPress={()=>navigation.navigate("Projects",{index:2})}>
                <Window title="Amazon Clone">
                    <FontAwesome name="amazon" size={80} color="#023047" />
                </Window>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate("Projects",{index:3})}>
                 <Window title="Chat App">
                    <Entypo name="chat" size={80} color="#023047" />
                </Window>
              </TouchableOpacity>
                    

          </View>
          <View style={styles.container}>
              <TouchableOpacity onPress={()=>navigation.navigate("Projects",{index:4})}>
                <Window title="Laser Tank Game">
                    <MaterialCommunityIcons name="tank" size={80} color="#023047" />
                </Window>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate("Projects",5)}>
                 <Window title="Mini Blog">
                    <Entypo name="keyboard" size={80} color="#023047" />
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

    }
})