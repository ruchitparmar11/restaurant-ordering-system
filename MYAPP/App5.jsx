import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screens/Home'
import Profile from './src/screens/Profile';
import Search from './src/screens/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Search" component={Search} />

    </Stack.Navigator>
  )
}

function TabNavigator() {
  return (
    <Tab.Navigator 
        screenOptions={{
          tabBarActiveTintColor:"red"}}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor:"red",
          tabBarIcon: ({color}) => 
            (
              <AntDesign name="home" size={22} color={color}/>
            )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        name="Search"
        component={Search}
      />
    </Tab.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})

