import React, { useState, useEffect } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { fetchAllCategories } from '../utils/api';

export default function HomeScreen(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchCategory = await fetchAllCategories();
      setCategories(fetchCategory);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      {
        categories.map((category) => {
          <Text key={category.id}>{category.name}</Text>
        })
      }
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