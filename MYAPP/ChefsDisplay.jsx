import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const ChefsDisplay = ({ route }) => {
  const { orders } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>👨‍🍳 Chef's Display</Text>
      {orders.length === 0 ? (
        <Text>No Orders Yet</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.orderItem}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text>${item.price.toFixed(2)}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold' },
  orderItem: { flexDirection: 'row', padding: 10, marginVertical: 8 },
  itemImage: { width: 60, height: 60, marginRight: 10 },
  itemName: { fontSize: 18 },
});

export default ChefsDisplay;
