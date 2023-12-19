import {StyleSheet, View} from 'react-native';
import React from 'react';
import AuthForm from './AuthForm';
import ButtonWhite from './ButtonWhite';

export default function AuthContent({isLogin}) {
  return (
    <View style={styles.container}>
      <AuthForm isLogin={isLogin} />
      <View>
        <ButtonWhite>{isLogin ? 'Sign Up' : 'Login'}</ButtonWhite>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9a1b5',
    marginTop: 50,
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 20,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});
