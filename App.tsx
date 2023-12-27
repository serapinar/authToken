import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import {useContext} from 'react';
import SignupScreen from './screens/SignupScreen';
import AuthContextProvider, {AuthContext} from './store/auth-context';
import { Pressable, StyleSheet, Text } from "react-native";


const Stack = createNativeStackNavigator();

function NormalStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#699d94',
        },
        headerTintColor: 'white',
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: 'Login',
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerTitle: 'Sign up',
        }}
      />
    </Stack.Navigator>
  );
}
function AfterAuthenticatedStack() {
  const authContext = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#699d94',
        },
        headerTintColor: 'white',
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'HomePage',
          headerRight: ()=>(
            <Pressable style={({pressed})=> pressed && styles.pressed} onPress={authContext.logout}>
              <Text>turn</Text>
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authContext = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authContext.isAuthenticated && <NormalStack />}
      {authContext.isAuthenticated && <AfterAuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
}
const styles= StyleSheet.create ({
  pressed:{
    opacity:0.5
  },
})
