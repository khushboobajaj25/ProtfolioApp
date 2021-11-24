import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MyCard from './MyCard'


export default function Education() {
    return (
        <View>
            <Text style={styles.title}>Education</Text>
            <MyCard title="SSC"  name =" Holy Family Convent High School" percentage = "88.6%" city="Ulhasnagar"/>
            <MyCard title="HSC"  name ="Chandibai Himmatmal Mansukhani College" percentage = "80.6%" stream="Science" city="Ulhasnagar" />
            <MyCard title="University"  name =" Swami Vivekanand Institute of Technology" cgpa = "9.00" stream="B Tech" city="Chembur"/>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        
        alignItems: 'center',
        marginRight: 10,
        marginTop:35,
        marginLeft:20,
        justifyContent: 'center',
        borderBottomWidth: 1,
        // borderRadius: 10,
        borderBottomColor:'#4682B4',
        color: 'white',
        textAlign: 'center',
    }
})