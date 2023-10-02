import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { DATA } from './data';
import React from 'react';
import Row from './components/row';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem= {({item}) => (  
          <Row item={item}/> 
      )}
      keyExtractor={item => item.id}
      ></FlatList>
    </SafeAreaView>
  );
}
/*
function renderItem({item}) {
  return (
    <Row person={item}/>
  );  
}
*/

/*
const renderItem = ({item}) => (
  <Text> {item.lastname} </Text>
)
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
