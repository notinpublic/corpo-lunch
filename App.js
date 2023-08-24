import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, View, Text } from 'react-native';
import { restaurantData } from './src/restaurant-list.js';
import { DiceButton } from './src/components/DiceButton.js'

function getRandomRestaurant(restaurants) {
  return restaurants[Math.floor(Math.random() * restaurants.length)].name;
}

const RandomNumber = () => {
  return Math.ceil(Math.random() * 6)
}

const Dice = ({ number }) => {
  return <Image
    width={200}
    height={200}
    source={ { uri: `https://raw.githubusercontent.com/OrganisationMan/Diceroller/main/Images/${number}.png` } }
  />
}

const WordDice = ({ restaurant }) => {
  return <Text>{restaurant}</Text>
}


export default function App() {
  const [dice, setDice] = useState(RandomNumber())
  const [word, setWord] = useState(getRandomRestaurant(restaurantData))


  return (
    <View style={styles.container}>
    <Dice number={dice} />
    <WordDice restaurant={word}/>

      <DiceButton
      title='Dice Roll'
      onPress={() => {
        setDice(RandomNumber()),
        setWord(getRandomRestaurant(restaurantData))
      }}
       />

      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});