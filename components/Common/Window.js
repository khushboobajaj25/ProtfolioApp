import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Window(props) {
    return (
        <>
            <View style={styles.container}>
                <View>
                    {props.children}
                </View>
                    <Text style={styles.title}>{props.title}</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 124,
        height: 124,
        borderRadius: 18,
        marginTop:50,
        marginLeft:50,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5'
    },
    main:{
        flex:1,
        backgroundColor: 'lightblue',

    },
    title: {
        
        fontWeight: 'bold',
        alignItems: 'center',
        color: '#6e5494',
        textAlign: 'center',
    }
})