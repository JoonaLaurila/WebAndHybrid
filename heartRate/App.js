import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [age, setAge] = useState("");
  const [heartRate, setRate] = useState(0);
  

  function calculate(text){
    setAge(text);
    const lowerRate = (220-text) * 0.65;
    const upperRate = (220-text) * 0.85;
    const result = lowerRate.toFixed(0) + '---' + upperRate.toFixed(0);
    setRate(result);
  }

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput style={styles.input} value={age} onChangeText={text => calculate(text)}  keyboardType='decimal-pad' />
      <Text>Hr limits</Text>
      <Text>{heartRate}</Text>
    
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
  input: {
    borderWidth: 1,
    borderColor: 'lightblue',
    margin: 1,
    width: 100,
  }
});
