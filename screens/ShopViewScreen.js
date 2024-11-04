import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import ShopNavigator from '../navigation/ShopNavigator';

export default function ShopViewScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shop View Screen</Text>
      {/* <View style={styles.container}>
        <SafeAreaView>
          <NavigationContainer>
            <ShopNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});