import React from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function Skills() {
    const skillsMcIcons = [
        { lang: "Java", icon: "language-java",id:1 },
        { lang: "Javascript", icon: "language-javascript",id:2 },
        { lang: "Python", icon: "language-python",id:3 },
        { lang: "Nodejs", icon: "nodejs",id:4 },
        { lang: "C", icon: "copyright", id:5 },
        { lang: "React JS", icon: "react", id:6 },
        { lang: "React Native", icon: "react", id:7 },
        { lang: "Html", icon: "language-html5",id:8 },
        { lang: "Css", icon: "language-css3",id:9 },
        {lang:"Github", icon:"github",id:10},
        {lang:"Django", img:"dj",id:11},
        { lang: "Problem Solving", icon: "code-json",id:12 },
        { lang: "Data Structures", icon: "database" ,id:13},
      ];
      
    
    return (
        <View style={styles.main}>
            
            <Text style={styles.title}>Skills</Text>
            <FlatList
                data={skillsMcIcons}
                renderItem={({ item }) => {
                return (
                    <View style={styles.container}>
                        {item.icon?<MaterialCommunityIcons name={item.icon}  size={30} color="black" style={styles.icon}/>:<Image source={require("../../assets/dj.png")} style={styles.img} />}
                        
                    
                    <Text style={styles.text}>{item.lang}</Text>
                    </View>
                );
                 }}
      />
            

        </View>
       

            
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'lightblue',

    },
    icon: {
        marginLeft: 10,
        marginTop: 20,
        // marginBottom: 30,
    },
    container: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
        borderBottomWidth: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#4682B4',
        paddingBottom: 10,
        marginBottom: 10,
        // justifyContent: 'space-around',
    },
    img:{
        width: 50,
        height: 50,
        marginLeft: 10,
        marginTop: 10,
    },
    text: {
        marginLeft: 20,
        marginTop: 20,
        textAlign: 'center',
        color:"white",
        fontSize: 20,
        fontWeight: "bold",
        
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'white',
        marginRight: 10,
        marginTop:40,
        marginLeft:20,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor:"#4682B4",
        fontFamily:'estonia-regular'
        
    }
})