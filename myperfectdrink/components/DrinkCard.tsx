import { Image, StyleSheet, Text, View } from "react-native";

import React from 'react';

interface Drink {
  _id: string;
  image: string;
  title: string;
  description: string;
  __v: number;
}

interface Props {
  item: Drink;
}

export function DrinkCard({ item }: Props) {
  return (
    <View style={styles.drinkItem}>
      <Image source={{ uri: item.image }} style={styles.drinkImage} />
      <View style={styles.drinkTextBox}>
        <Text style={styles.drinkTitle}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drinkItem: {
    padding: 15,
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  drinkTextBox: {
    display: 'flex',
    width: 206,
    padding: 5,
  },
  drinkImage: {
    width: 100,
    height: 100,
  },
  drinkTitle: {
    fontSize: 20,
  },
  description: {
    textAlign: 'left',
  },
});

    
