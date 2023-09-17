import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <Text>Hi. This is demo!!!</Text>
     <StatusBar 
      style="auto"
      backgroundColor='green'
      //hidden={true};
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
 
});
