import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AuthContextProvider from './store/auth-context.tsx';

const Stack = createNativeStackNavigator();

function NormalStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#63bdac',
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

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <NormalStack />
      </NavigationContainer>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({});
