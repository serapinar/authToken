import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import {useContext} from 'react';
import SignupScreen from './screens/SignupScreen';
import AuthContextProvider, {AuthContext} from './store/auth-context';
import {Pressable, StyleSheet} from 'react-native';
import {ArrowRightIcon, HomeIcon} from 'react-native-heroicons/solid';
import UserScreen from './screens/UserScreen.tsx';
import FirstScreen from './screens/FirstScreen.tsx';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function NormalTab() {

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="User"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (<HomeIcon name="home" color={'pink'} size={22} />),
        }}
      />
      <Tab.Screen name="First" component={FirstScreen} />
    </Tab.Navigator>
  );
}

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
      <Stack.Screen name="NormalTab" component={NormalTab} options={{headerShown: false}} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'HomePage',
          headerRight: () => (
            <Pressable
              style={({pressed}) => pressed && styles.pressed}
              onPress={authContext.logout}>
              <ArrowRightIcon color="white" size={28} />
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
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
