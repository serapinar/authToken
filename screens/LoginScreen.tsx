import {Alert} from 'react-native';
import React, {useState} from 'react';
import AuthContent from '../components/AuthContent';
import {login} from '../util/auth';
import Loading from '../components/Loading.tsx';

export default function LoginScreen() {
  const [isAuthanticating, setIsAuthanticating] = useState(false);

  async function loginHandler({email, password}) {
    setIsAuthanticating(true);
    try {
      await login(email, password);
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
