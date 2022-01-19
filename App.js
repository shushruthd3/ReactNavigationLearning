import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function DetailScreen({ navigation }) {

  return (
    <View>
      <Text> Detail screen! </Text>

    </View>
  );
}


function HomeScreen({ navigation }) {

  return (
    <View>
      <Text> Home screen!   new Added</Text>

    </View>
  );
}
export default function App() {


  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcons }} />
        <Tab.Screen name="Detail" component={DetailScreen} />
      </Tab.Navigator>
    </NavigationContainer>

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
