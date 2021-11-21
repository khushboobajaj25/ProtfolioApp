import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import MainProject from './components/MainProject';
import BaseProject from './components/BaseProject';
import Window from './components/Window';
import Project from './components/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProjectWindows from './components/ProjectWindows';
import WorkExperience from './components/WorkExperience';

import WelcomeScreen from './components/WelcomeScreen';
const MyTheme = {
  
  colors: {
   
    background: 'lightblue'
  },
};
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
     <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: '#023047',
          },
          headerTintColor: '#fff',
        }}
      
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="Skills" component={Skills} />
        <Stack.Screen name="Projects" component={BaseProject} />
        <Stack.Screen name="Project" component={ProjectWindows} />
        <Stack.Screen name="Work" component={WorkExperience} />
      </Stack.Navigator>
     </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
   
  },
});
