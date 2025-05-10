import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import DetailScreen from './src/screens/DetailScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import OrderHistoryScreen from './src/screens/OrderHistoryScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Signup" component={SignupScreen} options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Tab" component={TabNavigator} options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen name="Details" component={DetailScreen} options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen name="History" component={OrderHistoryScreen} options={{ animation: 'slide_from_bottom' }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import TabNavigator from './src/navigators/TabNavigator';
// import DetailScreen from './src/screens/DetailScreen';
// import PaymentScreen from './src/screens/PaymentScreen';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen
//           name="Tab"
//           component={TabNavigator}
//           options={{animation: 'slide_from_bottom'}}></Stack.Screen>
//         <Stack.Screen
//           name="Details"
//           component={DetailScreen}
//           options={{animation: 'slide_from_bottom'}}></Stack.Screen>
//         <Stack.Screen
//           name="Payment"
//           component={PaymentScreen}
//           options={{animation: 'slide_from_bottom'}}></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;





// import React, { useState, useRef } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Button,
//   Alert,
//   Animated,
//   Easing,
// } from 'react-native';

// const cuisines = [
//   { id: 'all', name: 'All', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTv_QqhTIV-YTMAL1wjBJ0KV2fKermaUIbizLF88ba3qavMjQv_ooJ4pIK_x_L8q8BBRmDJm9sCThXw7pfLkZXPGVoAiReiSGYXkP7KTw' },
//   { id: 'american', name: 'American', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5o1LHnL_oCLsieMatEdAERNLW4cT40DQ-Mw&s' },
//   { id: 'italian', name: 'Italian', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKBkf2NrniOFkUZ01DjFuFm5Whzpt1wKnFQ&s' },
//   { id: 'japanese', name: 'Japanese', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04GYW-Urbz6TsQul4LlGxqkvbCBtdQnAYoA&s' },
//   { id: 'mexican', name: 'Mexican', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElWn-WhNDFPkji2QzjFp-WDcLglr5arbvdg&s' },
//   { id: 'indian', name: 'Indian', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4-Npxs34CHMivSfM8KjevuRdGCn_mnW03g&s' },
// ];

// const foodItems = [
//   { id: '1', name: 'Burger', price: 12.99, description: 'Juicy beef burger', image: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg', cuisine: 'american' },
//   { id: '2', name: 'Pizza', price: 15.99, description: 'Pepperoni pizza', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKqzrE2hZnTGh65h_SlXd8X8V75HXdXC3Eg&s', cuisine: 'italian' },
//   { id: '3', name: 'Sushi', price: 22.50, description: 'Fresh salmon sushi', image: 'https://post.healthline.com/wp-content/uploads/2021/09/sushi-sashimi-1296x728-header.jpg', cuisine: 'japanese' },
//   { id: '4', name: 'Tacos', price: 11.50, description: 'Spicy beef tacos', image: 'https://brandsitesplatform-res.cloudinary.com/image/fetch/w_1540,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Foldelpaso%2Foldelpaso-us%2Frecipes%2Fqtcu578og0gukdk_kb_rmg_gmi_hi_res_jpeg.jpeg%3F%201540w', cuisine: 'mexican' },
//   { id: '5', name: 'Pasta', price: 14.75, description: 'Creamy Alfredo pasta', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UQ4YdPmSLfAAdR9SPxvgsPWx0Fb7xagNDA&s', cuisine: 'italian' },
//   { id: '6', name: 'Steak', price: 25.99, description: 'Grilled steak', image: 'https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2023/06/Sirloin-Steak-24.jpg', cuisine: 'american' },
//   { id: '7', name: 'Butter Chicken', price: 16.99, description: 'Rich and creamy Indian dish', image: 'https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4.jpg', cuisine: 'indian' },
//   { id: '8', name: 'Ramen', price: 13.50, description: 'Traditional Japanese noodle soup', image: 'https://pinchandswirl.com/wp-content/uploads/2024/10/Shoyu-Ramen-featured-image.jpg', cuisine: 'japanese' },
// ];

// const HomeScreen = () => {
//   const [selectedCuisine, setSelectedCuisine] = useState('all');
//   const [selectedItems, setSelectedItems] = useState([]);
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   React.useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 600,
//       easing: Easing.ease,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   const filteredItems = selectedCuisine === 'all'
//     ? foodItems
//     : foodItems.filter(item => item.cuisine === selectedCuisine);

//   const toggleItemSelection = (itemId) => {
//     setSelectedItems(prev =>
//       prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId]
//     );
//   };

//   const calculateTotal = () => {
//     return selectedItems
//       .reduce((total, itemId) => {
//         const item = foodItems.find(i => i.id === itemId);
//         return total + (item ? item.price : 0);
//       }, 0)
//       .toFixed(2);
//   };

//   const handlePlaceOrder = () => {
//     if (selectedItems.length === 0) {
//       Alert.alert('No items selected', 'Please select at least one item to place an order.');
//       return;
//     }
//     Alert.alert('Order Confirmed', 'Your order has been placed successfully!', [{ text: 'OK' }]);
//     setSelectedItems([]);
//   };

//   const renderCuisine = ({ item }) => (
//     <TouchableOpacity
//       style={[styles.cuisineContainer, selectedCuisine === item.id && styles.selectedCuisine]}
//       onPress={() => setSelectedCuisine(item.id)}
//     >
//       <Image source={{ uri: item.image }} style={styles.cuisineImage} />
//       <Text style={styles.cuisineText}>{item.name}</Text>
//     </TouchableOpacity>
//   );

//   const renderItem = ({ item }) => {
//     const isSelected = selectedItems.includes(item.id);
//     return (
//       <Animated.View style={{ opacity: fadeAnim }}>
//         <TouchableOpacity
//           style={[styles.itemContainer, isSelected && styles.selectedItem]}
//           onPress={() => toggleItemSelection(item.id)}
//         >
//           <Image source={{ uri: item.image }} style={styles.itemImage} />
//           <View style={styles.itemInfo}>
//             <Text style={styles.itemName}>{item.name}</Text>
//             <Text style={styles.itemDescription}>{item.description}</Text>
//             <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
//           </View>
//           {isSelected && <Text style={styles.checkmark}>✓</Text>}
//         </TouchableOpacity>
//       </Animated.View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>🍽 Choose Your Cuisine</Text>

//       <FlatList
//         data={cuisines}
//         renderItem={renderCuisine}
//         keyExtractor={item => item.id}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.cuisineList}
//       />

//       <FlatList
//         data={filteredItems}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         contentContainerStyle={styles.listContent}
//       />

//       <View style={styles.footer}>
//         <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
//         <Button
//           title="Place Order"
//           onPress={handlePlaceOrder}
//           disabled={selectedItems.length === 0}
//           color="#ff6347"
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#A0522D' },
//   header: { fontSize: 22, fontWeight: 'bold', padding: 16, textAlign: 'center', color: '#fff' },
//   cuisineList: { paddingHorizontal: 10, paddingBottom: 20 },
//   cuisineContainer: {
//     alignItems: 'center',
//     marginHorizontal: 8,
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: '#f5f5f5',
//   },
//   selectedCuisine: { backgroundColor: '#fff' },
//   cuisineImage: { width: 60, height: 60, borderRadius: 30 },
//   cuisineText: { marginTop: 5, fontSize: 14, fontWeight: 'bold' },
//   listContent: { paddingBottom: 80 },
//   itemContainer: {
//     flexDirection: 'row',
//     padding: 16,
//     margin: 10,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     elevation: 4,
//   },
//   selectedItem: { backgroundColor: '#ffebd2', borderWidth: 1, borderColor: '#ff6347' },
//   itemImage: { width: 80, height: 80, borderRadius: 8 },
//   itemInfo: { flex: 1, marginLeft: 16 },
//   itemName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
//   itemDescription: { fontSize: 14, color: '#666', marginVertical: 4 },
//   itemPrice: { fontSize: 16, color: '#ff6347', fontWeight: 'bold' },
//   checkmark: { fontSize: 24, color: '#ff6347', marginLeft: 8 },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: '#fff',
//     padding: 16,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//   },
//   totalText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
// });

// export default HomeScreen;