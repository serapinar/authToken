import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Input from './Input';
import Button from './Button';

export default function AuthForm({isLogin}) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  function updateInput(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;

      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmEmail':
        setEnteredConfirmEmail(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }
  return (
    <View>
      <Input
        label="Email"
        keyboardType="email-address"
        onUpdateValue={updateInput.bind(this, 'email')}
        value={enteredEmail}
      />
      {!isLogin && (
        <Input
          label="Confirm Email"
          keyboardType="email-address"
          onUpdateValue={updateInput.bind(this, 'confirmEmail')}
          value={enteredConfirmEmail}
        />
      )}
      <Input
        label="Password"
        secure
        onUpdateValue={updateInput.bind(this, 'password')}
        value={enteredPassword}
      />
      {!isLogin && (
        <Input
          label="Confirm Password"
          secure
          onUpdateValue={updateInput.bind(this, 'confirmPassword')}
          value={enteredConfirmPassword}
        />
      )}
      <View style={styles.buttons}>
        <Button>{isLogin ? 'Login' : 'Sign up'}</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 10,
  },
});
