import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';


const RandomNumber = () => {
  return Math.ceil(Math.random() * 6)
}

// https://raw.githubusercontent.com/OrganisationMan/Diceroller/main/Images/1.png

const Dice = ({ number }) => {
  return <Image
    width={200}
    height={200}
    source={ { uri: `https://raw.githubusercontent.com/OrganisationMan/Diceroller/main/Images/${number}.png` } }
  />
}


export default function App() {
  const [dice, setDice] = useState(RandomNumber())


  return (
    <View style={styles.container}>
    <Dice number={dice} />

      <Button
      title='Dice Roll'
      onPress={() => {
        setDice(RandomNumber())
      }}
       />

      <StatusBar style="auto" />
    </View>
  );

}7

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});