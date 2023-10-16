import { StyleSheet,View, Text } from "react-native";
import React from "react";
import Position from "./components/Position";

export default function App(){
    return (
        <View style= {styles.container}>
            <Text style={styles.heading}> Current Weather</Text>
            <Position/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    marginTop: 8,
    marginBottom: 8,
  },
  heading: {
    margin: 8,
    textAlign: 'center',
    height: 41,
  }
})

