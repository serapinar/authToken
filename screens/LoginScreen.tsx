import {Alert} from 'react-native';
import React, {useState, useContext} from 'react';
import AuthContent from '../components/AuthContent';
import {login} from '../util/auth';
import Loading from '../components/Loading.tsx';
import { AuthContext } from "../store/auth-context.tsx";

export default function LoginScreen() {
  const [isAuthanticating, setIsAuthanticating] = useState(false);
  const authContext = useContext(AuthContext);

  async function loginHandler({email, password}) {
    setIsAuthanticating(true);
    try {
      const token= await login(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert('Login Failed! Please check your answers...');
    }
    setIsAuthanticating(false);
  }

  if (isAuthanticating) {
    return <Loading message="Signing in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}
