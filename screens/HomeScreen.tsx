import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to HomeScreen</Text>
      <Text> Congratulations!!! </Text>
      <Text>You have successfully logged in</Text>

    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  title:{
    fontSize:16,
    fontWeight:"bold",
    marginBottom:10
  },
})
