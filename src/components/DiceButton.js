import { Button, StyleSheet } from "react-native";

export default function DiceButton(title, onPress) {
  return <Button title={title} onPress={onPress} className={styles.button}></Button>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: red,
    borderColor: '#fff',
    borderBottomWidth: '20px'
  }
});