import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity,Linking } from 'react-native'
import { Card } from 'react-native-elements'
import { projectDetails,companyDetails } from '../../Data';
import { Entypo } from '@expo/vector-icons';
import Gallery from './Gallery';

export default function Details({route,navigation}) {
    const{index, title}  = route.params;
    const data = title == "Project"?projectDetails[index]:companyDetails[index];
    function openUrl(url){
        Linking.openURL(url);
     }
    return (
        <ScrollView style={{marginBottom:10}}>
              
            <View style={styles.title}>

            <Text style={{...styles.text,marginTop:10, textAlign:"center"}}>{data.Name && data.Name}</Text>
            </View>
           
            <Card containerStyle={{backgroundColor:"#b2ffff",padding:0, marginTop:10}}>
                <Gallery img ={data.Image && data.Image}/>
                <Card.Divider style={{backgroundColor:"#e0e0e0", marginTop:20}}/>
                <Card.Title><Text style={{color:"#4682B4"}}>About  {title}</Text>  </Card.Title>
                <Card.Divider/>
                {data.Languages?(
                    <>

                        {data.Languages.frontEnd &&<Text style={styles.content}>FrontEnd: {data.Languages.frontEnd}</Text>}
                        {data.Languages.frontEnd && <Card.Divider style={{backgroundColor:"#e0e0e0", marginTop:20}}/>}
                        {data.Languages.backEnd && <Text  style={styles.content}>BackEnd: {data.Languages.backEnd}</Text>}
                        {data.Languages.backEnd && <Card.Divider style={{backgroundColor:"#e0e0e0", marginTop:20}}/>}
                    </>
                ):<></>}
                {
                    data.Duration?(
                        <>
                        <Text style={{color:"#6e5494", marginLeft:20}}>Duration:{data.Duration}</Text>
                        <Card.Divider style={{backgroundColor:"#e0e0e0", marginTop:20}}/>
                        </>
                    ):<></>
                }

                { data.WorkedOn ?(
                    <>
                    <Text style={{color:"#6e5494", marginLeft:20}}>Worked On:{data.WorkedOn}</Text>
                    <Card.Divider style={{backgroundColor:"#e0e0e0", marginTop:20}}/>
                    </>
                ):<></>
                } 
                { data.WorkedAs ?(
                    <>
                    <Text style={{color:"#6e5494", marginLeft:20}}>Worked As:{data.WorkedAs}</Text>
                    <Card.Divider style={{backgroundColor:"#e0e0e0", marginTop:20}}/>
                    </>
                ):<></>
                } 
                <Text style={{color:"#6e5494", marginLeft:20}}>Description:{data.Description && data.Description}</Text>
                
                
                {data.Link?(
                    <>
                    <Card.Divider style={{backgroundColor:"#e0e0e0", marginTop:20}}/>
                     <View style={styles.github}>
                        <Entypo name="github-with-circle" size={24} color="#6e5494" />
                        <Text style={{ "color": "#6e5494",fontSize:10  }} onPress={ () => openUrl(data.Link)}> {data.Link && data.Link}</Text>
                    </View>
                    </>

                ):<></>}
               
            </Card>
        
        </ScrollView>
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
        color:"#6e5494",
    }
})