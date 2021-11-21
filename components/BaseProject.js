import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import {Card} from 'react-native-elements'
import MainProject from './MainProject'
import { projectDetails } from '../Data'
import { Entypo } from '@expo/vector-icons';
export default function BaseProject({route,navigation}) {
   const {index} = route.params;
    return (
        <View>
            <View style={styles.title}>

            <Text style={{...styles.text,marginTop:10, textAlign:"center"}}>{projectDetails[index].projectName}</Text>
            </View>
           
            <Card containerStyle={{backgroundColor:"#b2ffff",padding:0, marginTop:10}}>
                <MainProject img ={projectDetails[index].projectImage}/>
                <Card.Divider style={{backgroundColor:"#e0e0e0", marginTop:20}}/>
                <Card.Title>About Project</Card.Title>
                <Card.Divider/>
                <Text style={styles.content}>FrontEnd: {projectDetails[index].projectLanguages["frontEnd"]}</Text>
                <Card.Divider style={{backgroundColor:"#e0e0e0", marginTop:20}}/>
                <Text  style={styles.content}>BackEnd: {projectDetails[index].projectLanguages["backEnd"]}</Text>
                <Card.Divider style={{backgroundColor:"#e0e0e0", marginTop:20}}/>
                <Text style={{color:"black", marginLeft:20}}>Description:{projectDetails[index].projectDescription}</Text>
                <Card.Divider style={{backgroundColor:"#e0e0e0", marginTop:20}}/>
                
                <View style={styles.github}>
                        <Entypo name="github-with-circle" size={24} color="#6e5494" />
                        <Text style={{ "color": "#6e5494",fontSize:15  }}> {projectDetails[index].projectLink}</Text>
                </View>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 50,
        marginLeft: 20,
        alignItems: "center",
        textAlign: "center",

        fontSize: 20,
        color:"white",
        borderRadius:10
    },

    title:{
       borderRadius:5,
       marginTop:20,
        marginLeft:20,
        marginRight:20,
        backgroundColor:"#70d6ff",
        height:50,


    },
    link: {
        fontWeight: "bold",
        // marginLeft:80,
        flexDirection: "row",
        marginBottom: 0,
    },
    github: {
        flexDirection: "row",
        
        // marginTop: 10,
        marginLeft: 10,
        marginBottom: 20,
    },
    content: {
        marginLeft: 20,
        // marginBottom: 10,
        // marginTop: 10,
    }
})