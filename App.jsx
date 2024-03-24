import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, SafeAreaView, Platform, ImageBackground, Settings } from 'react-native';
import MainScreen from './screens/MainScreen';
import SettingsScreen from './screens/SettingsScreen';
import Products from './screens/ProductsScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // import Ionicons from react-native-vector-icons
import 'react-native-gesture-handler';
import ProductDetails from './screens/subScreens/ProductDetails';
import EditProduct from './screens/subScreens/EditProduct';
import AddProduct from './screens/subScreens/AddProduct';
import Inventory from './screens/InventoryScreen';
import Sales from './screens/SalesScreen';
import POS from './screens/PosScreen';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();


function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Back" component={MainScreen} options={{headerShown: false}} />
      <HomeStack.Screen name="Products" component={Products} />
      <HomeStack.Screen name="Inventory" component={Inventory}  />
      <HomeStack.Screen name="Sales" component={Sales} />
      <HomeStack.Screen name="POS" component={POS} />
      <HomeStack.Screen name="Edit Product" component={EditProduct}  />
      <HomeStack.Screen name="Add Product" component={AddProduct} />
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Configuration" component={SettingsScreen} />
      <SettingsStack.Screen name="Products_" component={Products} options={{headerShown: false}} />
      <SettingsStack.Screen name="nventory" component={Inventory}  />
      <SettingsStack.Screen name="Sales" component={Sales} />
      <SettingsStack.Screen name="POS" component={POS} />
    </SettingsStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <ImageBackground source={require('./assets/bg.png')} resizeMode='cover' style={{ flex: 1 }}>
      <SafeAreaView style={styles.imageLogoContainer}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
      </SafeAreaView>
      <View style={styles.divider}></View>
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName;
              let iconSize = route.params?.iconSize || 20;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              return <Ionicons name={iconName} size={iconSize} color={color} />;
            },
          })}
          barStyle={{ backgroundColor: 'transparent', height: 80, borderTopWidth: 0, elevation: 0, shadowOpacity: 0, shadowOffset: { height: 0 } }}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            tabBarShowLabel: false,
          }}
        >
         
        <Tab.Screen name="Home" component={HomeStackScreen} options={{ params: { iconSize: 30, iconColor: 'blue' } }} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} options={{ headerShown: false, params: { iconSize: 25, iconColor: 'red' }}} />
      </Tab.Navigator>
      </View>
      </ImageBackground>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  bgImage: {
    // set transparency level of the background image
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    // change opacity of the background image
    opacity: 0.5,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // padding: 16,
  },
  imageLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20: 0
  },
  logo: {
    width: 150,
    height: 50,
  },
  divider: {
    borderBottomColor: '#F4813F',
    borderBottomWidth: 1,
    paddingTop: '2%',
  },
});