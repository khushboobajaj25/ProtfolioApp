import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Card} from 'react-native-elements'
export default function MyCard(props) {
    return (
        <View style={styles.cardview}>
           <Card>
            <Card.Title>{props.title}</Card.Title>
            <Card.Divider/>
            
              
                <Text>Name:{props.name} </Text>
                {props.stream?(<Text>Stream:{props.stream}</Text>):null}
                {props.cgpa?(<Text>CGPA:{props.cgpa}</Text>):(<Text>Percentage: {props.percentage}</Text>)}
                <Text>City:{props.city}</Text>
                
                
                    
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
