import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {UserCircleIcon} from 'react-native-heroicons/mini';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#a3f1e5'}}>
      <View
        style={{
          backgroundColor: '#92dcd1',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 7,
          borderRadius:5
        }}>
        <Image
          style={{width: 100, height: 45, borderRadius: 15, margin:5}}r
          source={require('../asset/images.png')}
        />
        <Pressable style={{marginLeft: 5}}>
          <UserCircleIcon color="red" size={40} />
        </Pressable>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to HomeScreen</Text>
        <Text> Congratulations!!! </Text>
        <Text>You have successfully logged in</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
