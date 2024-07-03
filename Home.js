import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Menu from '../assets/images/Menu.png';
import Logo from '../assets/images/image.png';
import Search from '../assets/images/Search (1).png';
import Shop from '../assets/images/shoppingBag.png';
import ListView from '../assets/images/Listview (1).png';
import Filter from '../assets/images/Filter (1).png';
import Dress1 from '../assets/images/dress1.png';
import addCircle from '../assets/images/add_circle (1).png';
import Dress2 from '../assets/images/dress2.png';
import Dress3 from '../assets/images/dress3.png';
import Dress4 from '../assets/images/dress4.png';
import Dress5 from '../assets/images/dress5.png';
import Dress6 from '../assets/images/dress6.png';

const products = [
  { id: '1', name: 'Office Wear', image: Dress1, description: 'Reversible angora cardigan', price: 120 },
  { id: '2', name: 'Black', image: Dress2, description: 'Reversible angora cardigan', price: 120 },
  { id: '3', name: 'Church Wear', image: Dress3, description: 'Reversible angora cardigan', price: 120 },
  { id: '4', name: 'Lamerei', image: Dress4, description: 'Reversible angora cardigan', price: 120 },
  { id: '5', name: '21WN', image: Dress5, description: 'Reversible angora cardigan', price: 120 },
  { id: '6', name: 'Lopo', image: Dress6, description: 'Reversible angora cardigan', price: 120 },
];

const Home = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const initializeCart = async () => {
      await AsyncStorage.removeItem('cart');
      setCart([]);
    };

    initializeCart();
  }, []);

  const addToCart = async (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={Menu} style={styles.Menu} />
            <Image source={Logo} style={styles.Image} />
            <View style={styles.navs}>
              <Image source={Search} style={styles.Search} />
              <Image source={Shop} style={styles.Shop} />
            </View>
          </View>
          <View style={styles.header2}>
            <Text style={styles.story}>OUR STORY</Text>
            <View style={styles.header2Navs}>
              <Image source={ListView} style={{ width: 28, height: 28 }} />
              <Image source={Filter} style={{ width: 28, height: 28 }} />
            </View>
          </View>
          <View style={styles.storyCards}>
            {products.slice(0, 2).map((product) => (
              <View key={product.id} style={styles.card}>
                <Image source={product.image} style={styles.productImage} />
                <View style={styles.dressText}>
                  <Text style={styles.title}>{product.name}</Text>
                  <Text style={styles.subTitle}>{product.description}</Text>
                  <Text style={styles.price}>${product.price}</Text>
                  <TouchableOpacity style={styles.addCircleContainer} onPress={() => addToCart(product)}>
                    <Image source={addCircle} style={styles.addCircle} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.storyCards}>
            {products.slice(2, 4).map((product) => (
              <View key={product.id} style={styles.card}>
                <Image source={product.image} style={styles.productImage} />
                <View style={styles.dressText}>
                  <Text style={styles.title}>{product.name}</Text>
                  <Text style={styles.subTitle}>{product.description}</Text>
                  <Text style={styles.price}>${product.price}</Text>
                  <TouchableOpacity style={styles.addCircleContainer} onPress={() => addToCart(product)}>
                    <Image source={addCircle} style={styles.addCircle} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.storyCards}>
            {products.slice(4).map((product) => (
              <View key={product.id} style={styles.card}>
                <Image source={product.image} style={styles.productImage} />
                <View style={styles.dressText}>
                  <Text style={styles.title}>{product.name}</Text>
                  <Text style={styles.subTitle}>{product.description}</Text>
                  <Text style={styles.price}>${product.price}</Text>
                  <TouchableOpacity style={styles.addCircleContainer} onPress={() => addToCart(product)}>
                    <Image source={addCircle} style={styles.addCircle} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    backgroundColor: 'white',
  },
  container: {
    paddingTop: 70,
    marginLeft: 30,
    marginRight: 30,
  },
  Menu: {
    width: 30,
    height: 30,
  },
  Image: {
    width: 140,
    height: 50,
    marginTop: -10,
  },
  Search: {
    width: 28,
    height: 28,
  },
  Shop: {
    width: 28,
    height: 28,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navs: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  story: {
    fontSize: 27,
    letterSpacing: 5,
    fontFamily: 'serif',
    marginTop: 26,
  },
  header2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header2Navs: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    letterSpacing: 2,
  },
  subTitle: {
    fontSize: 14,
    color: '#cacaca',
  },
  price: {
    fontSize: 19,
    color: '#DD8560',
  },
  dressText: {
    marginTop: 10,
  },
  storyCards: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    position: 'relative',
    width: '48%',
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  addCircleContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  addCircle: {
    width: 28,
    height: 28,
  },
});

export default Home;
