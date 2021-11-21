import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Khushboo's Protfolio</Text>
            <Image source={require("../assets/img.jpg")} style={styles.img} />
            <View style={styles.content}>
                <View style={styles.namecontent}>
                    <Text style={styles.name}>Khushboo Bajaj</Text>

                </View>
                <View style={styles.namecontent}>
                    <Octicons name="mail" size={20} color="#4285F4" />
                    <Text style={{ "color": "#4285F4", fontSize:15 }}> khushboobajaj25720022@gmail.com</Text>
                </View>
                <View style={styles.namecontent}>
                    <Entypo name="github-with-circle" size={24} color="#6e5494" />
                    <Text style={{ "color": "#6e5494",fontSize:15  }}> https://github.com/khushboobajaj25</Text>
                </View>
        


            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    img: {
        width: 210,
        height: 210,
        borderRadius:200,
        marginLeft: 100,
    },
    text: {
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 80,
        marginLeft: 20,
        alignItems: "center",
        textAlign: "center",
        fontSize: 30,
        color:"white"
    },

    name: {
        fontWeight: "bold",
        // marginLeft:80,
        marginTop: 50,
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "italic"
    },
    input: {
        marginLeft: 10,
        marginTop: 50,
        fontSize: 20,
        fontWeight: "bold",
        borderRadius: 5,
        borderWidth: 1,
        width: 200,
        marginRight: 20,




    },
    next:{
        backgroundColor:"#023047",
        width:200,
        height:50,
        marginLeft:80,
        marginTop:30,
        borderRadius:10,
        
    },
    namecontent: {

        flexDirection: "row",
        justifyContent: "center",
        marginRight: 20,
        marginTop:30
    }

})
