import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { BottomMenu } from './components/BottomMenu';
import { DrinkCard } from './components/DrinkCard';

interface Drink {
  _id: string;
  image: string;
  title: string;
  description: string;
  __v: number;
}

export default function App() {
  const [drinks, setDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await fetch('http://192.168.26.249:4000/api/drinks');
        const data = await response.json();
        setDrinks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDrinks();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        style={styles.list}
        data={drinks}
        renderItem={({ item }) => <DrinkCard item={item} />}
        keyExtractor={(item) => item._id}
      />
      <BottomMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6d945d',
  },
  list: {
    width: '90%',
    height: '80%',
  },
});
