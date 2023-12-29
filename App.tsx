import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import {useContext} from 'react';
import SignupScreen from './screens/SignupScreen';
import AuthContextProvider, {AuthContext} from './store/auth-context';
import {Pressable, StyleSheet} from 'react-native';
import {ArrowRightIcon} from 'react-native-heroicons/solid';
import NormalTab from './components/NormalTab.tsx';
import UserInfoScreen from './screens/userInfoScreen.tsx';

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
      <Stack.Screen name="Home Page" component={NormalTab} options={{headerShown: false}} />
      <Stack.Screen
        name="UserInfo"
        component={UserInfoScreen}
        options={{
          headerTitle: 'User Informations',
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
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
