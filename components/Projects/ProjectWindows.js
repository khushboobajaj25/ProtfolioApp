import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Window from '../Common/Window'
export default function ProjectWindows({navigation}) {
    return (
        <View>
            <Text style={styles.title}>Projects</Text>
          <View style={styles.container}>
              <TouchableOpacity onPress={()=>navigation.navigate("Details",{index:0, title:"Project"})}>
                <Window title="Banking System">
                    <FontAwesome name="bank" size={80} color="#023047" />
                </Window>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate("Details",{index:1, title:"Project"})}>
                 <Window title="Keep Notes">
                 <MaterialCommunityIcons name="google-keep" size={80} color="#023047" />
                </Window>
              </TouchableOpacity>
                    

          </View>
          <View style={styles.container}>
              <TouchableOpacity onPress={()=>navigation.navigate("Details",{index:2, title:"Project"})}>
                <Window title="Amazon Clone">
                    <FontAwesome name="amazon" size={80} color="#023047" />
                </Window>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate("Details",{index:3, title:"Project"})}>
                 <Window title="Chat App">
                    <Entypo name="chat" size={80} color="#023047" />
                </Window>
              </TouchableOpacity>
                    

          </View>
          <View style={styles.container}>
              <TouchableOpacity onPress={()=>navigation.navigate("Details",{index:4, title:"Project"})}>
                <Window title="Laser Tank Game">
                    <MaterialCommunityIcons name="tank" size={80} color="#023047" />
                </Window>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate("Details",{index:5, title:"Project"})}>
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
        borderBottomColor:"#4682B4",

    }
})