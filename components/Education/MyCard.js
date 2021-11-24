import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Card} from 'react-native-elements'
export default function MyCard(props) {
    return (
        <View style={styles.cardview}>
           <Card containerStyle={{backgroundColor:"#6e5494"}}>
            <Card.Title ><Text style={{color:"#b2ffff"}}>{props.title}</Text></Card.Title>
            <Card.Divider/>
            
              
                <Text style={{color:"white"}}>Name: {props.name} </Text>
                {props.stream?(<Text style={{color:"white"}}>Stream: {props.stream} </Text>):null}
                {props.cgpa?(<Text style={{color:"white"}}>CGPA: {props.cgpa} </Text>):(<Text style={{color:"white"}}>Percentage: {props.percentage}</Text>)}
                <Text style={{color:"white"}}>City: {props.city}</Text>
                
                
                    
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    cardview: {
        margin: 10,
        marginTop: 20,
        
    }
})
