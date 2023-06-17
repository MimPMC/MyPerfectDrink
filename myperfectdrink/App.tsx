import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';



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

  const myIcon1 = <Icon name="comments" size={30} color="#900" />; // Defaults to regular

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
      <View style={styles.drinkTextBox}>
        <Text style={styles.drinkTitle}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleLogo}>My Drinks
          </Text>
      </View>
    
      <Separator></Separator>
      <FlatList
        style={styles.list}
        data={drinks}
        renderItem={renderDrinkItem}
        keyExtractor={(item) => item._id}
      />
      <View style={styles.barWrapper}>
      <View style={styles.bar}>
      <Icon name="home" size={25} color="#04331d" />
      <Icon name="coffee" size={25} color="#04331d" />
      <Icon name="comments" size={25} color="#04331d" />
      <Icon name="shopping-cart" size={25} color="#04331d" />

      
      </View>

      </View>
      
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6d945d',

  },
  barWrapper: {
    backgroundColor: "#fff5f5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // This is only for Android
  },
  bar: {
    height:55,
    width: "100%",
    backgroundColor: "#fff5f5",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    
    


  },
  drinkItem: {
    padding: 15,
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white"
    
   
  },
  title: {
    backgroundColor: "#fff5f5",
    height: 60,
    display: "flex",
    justifyContent: "flex-end",
    paddingLeft: 17,
    paddingBottom: 4,

    fontSize: 24,
    width: "100%"
  },
  titleLogo: {
    fontSize:24,
  },
  hello: {
    marginLeft: 5,
    paddingLeft: 5,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#ffffff',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  drinkImage: {
    width: 100,
    height:100,
  },
  drinkTitle: {
    fontSize: 20,

  },
  list: {
    width: "90%",
    height: "80%"
  },
  description: {
    textAlign: "left",
    
  },
  drinkTextBox: {

    display: "flex",
    width: 206,
    padding: 5
    
    
  }
  
});