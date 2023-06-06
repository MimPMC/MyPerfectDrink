import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface Drink {
  _id: string;
  title: string;
  description: string;
  __v: number;
}

export default function App() {
  const [drinks, setDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await axios.get('http://192.168.1.66:4000/api/drinks');
        setDrinks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDrinks();
  }, [drinks]);

  if (!drinks) {
    return (
      <View style={styles.container}>
        <Text>Current drinks available:</Text>
        <Text>No drinks found!</Text>
      </View>
    );
  }

  const renderDrinkItem = ({ item }: { item: Drink }) => (
    <Text style={styles.drinkItem }>{item.title+ ": "}
    <Text style={styles.hello}>{item.description}</Text></Text>
    
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current drinks available:</Text>
      <FlatList
        data={drinks}
        renderItem={renderDrinkItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#31ff43',
  },
  drinkItem: {
    fontSize: 16,
    marginBottom: 10,
   
  },
  title: {
    marginTop: 50,
    fontSize: 24,

  },
  hello: {
    marginLeft: 5,
    paddingLeft: 5,
  }
});