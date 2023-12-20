import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";

export default function Loading ({message}){
  return(
    <View style={styles.container}>
      <Text>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize:16,
    marginBottom:10,
  },

});
