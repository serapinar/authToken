import { Alert } from "react-native";
import React, { useContext, useState } from "react";
import AuthContent from "../components/AuthContent";
import { createUser } from "../util/auth.tsx";
import Loading from "../components/Loading";
import { AuthContext } from "../store/auth-context.tsx";

export default function SignupScreen() {

  const [isAuthanticating, setIsAuthanticating] = useState(false);
  const authContext = useContext(AuthContext);

  async function signUpHandler({ email, password }) {
    setIsAuthanticating(true);
    try {
      const token= await createUser(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert("Something is wrong! Please check your answers...");
    }
    setIsAuthanticating(false);
  }

  if (isAuthanticating) {
    return <Loading message="account is beeing created..." />;
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}
