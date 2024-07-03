import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import removeCircle from '../assets/images/remove.png'; 
import Logo from '../assets/images/image.png'
import piece from '../assets/images/piece (2).png'

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const storedCart = await AsyncStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      } else {
        setCart([]);
      }
    };

    fetchCart();
  }, []);

  const clearCart = async () => {
    await AsyncStorage.removeItem('cart');
    setCart([]);
    Alert.alert('Cart Cleared', 'Your cart has been cleared.');
  };

  const removeFromCart = async (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.head1}>
          <Image source={Logo} style={styles.logo}/>
          <AntDesign name="search1" size={27} color="black" style={{marginTop: 10}}/>
        </View>
        <TouchableOpacity onPress={clearCart}>
          <Image source={piece} style={styles.piece}/>
        </TouchableOpacity>
      </View>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.cartImage}/>
            <View style={styles.cartText}>
              <Text style={styles.cartName}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <Image source={removeCircle} style={styles.removeCircle} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingRight: 16,
    paddingLeft: 20,
    backgroundColor: 'white',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  cartImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  cartText: {
    flex: 1,
    marginLeft: 10,
  },
  cartName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 16,
    color: '#333',
  },
  removeCircle: {
    width: 24,
    height: 24,
  },
  logo: {
    width: 140,
    height: 50,
  },
  head1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  piece: {
    width: 140,
    height: 50,
    marginTop: 30,
    marginLeft: 100,
  },
});

export default Cart;
