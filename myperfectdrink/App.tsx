import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

interface Drink {
  _id: string;
  image: string;
  title: string;
  description: string;
  __v: number;
}

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const [drinks, setDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await axios.get('http://192.168.26.249:4000/api/drinks');
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
    <View style={styles.drinkItem}>
      <Image source={{ uri: item.image }} style={styles.drinkImage} />
      <View>
      <Text style={styles.drinkTitle}>{item.title}</Text>
      <Text>{item.description}</Text>

      </View>
      
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current drinks available:</Text>
      <FlatList
        style={styles.list}
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
    backgroundColor: '#78aa64',
  },
  drinkItem: {
    padding: 15,
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    backgroundColor: "white"
    
   
  },
  title: {
    marginTop: 50,
    fontSize: 24,

  },
  hello: {
    marginLeft: 5,
    paddingLeft: 5,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  drinkImage: {
    width: 100,
    height:100
  },
  drinkTitle: {
    fontSize: 20,
    textAlign: "center",
  },
  list: {
    width: "100%",
  }
  
});