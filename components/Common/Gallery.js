import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions
} from 'react-native';




export default function Gallery(props) {
  const [active,setActive]= useState(null);
  const images = props.img;
  function change(nativeEvent){
    if(nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide !== active) {
        setActive(slide);
      }
    }
  
  }

  
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({ nativeEvent })=>change(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
          >
            {
              images.map((e, index) =>
                <Image
                  key={e.id}
                  resizeMode="stretch"
                  style={styles.wrap}
                  source={e.img}
                />
              )
            }
          </ScrollView>
          <View style={styles.wrapDot}>
            {
              images.length>1 && images.map((e, index) =>
                <Text
                  key={index}
                  style={active === index ? styles.dotActive : styles.dot}>●</Text>)
            }
          </View>
        </View>

      </SafeAreaView>
    );
  };


const styles = StyleSheet.create({
  container: {
      marginTop:30,
      marginRight:50,
      marginLeft:50,
      margin:"auto",
      alignItems:"center",
  },
  wrap: {
    width: Dimensions.get('window').width*0.75,
    height: Dimensions.get('window').height * 0.25 // 25% window
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dot: {
    margin: 3,
    color: '#888'
  },
  dotActive: {
    margin: 3,
    color: 'black'
  }

});

