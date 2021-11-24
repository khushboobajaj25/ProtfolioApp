import React ,{useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './components/Profile/Home';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProjectWindows from './components/Projects/ProjectWindows';
import WorkExperience from './components/Work/WorkExperience';
import Details from './components/Common/Details';
import WelcomeScreen from './components/Welcome/WelcomeScreen';


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
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }}
      
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="Skills" component={Skills} />
        <Stack.Screen 
          name="Details" 
          component={Details} 
          options={{
            title:"",
          }}

        
        
        />
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
    // fontFamily: "nunito-regular",
   
  },
});
