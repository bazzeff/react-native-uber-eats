import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const items = [
    {
      image: require("../../assets/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
      image: require("../../assets/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
      image: require("../../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../../assets/images/fast-food.png"),
      text: "Fast Foods",
    },
    {
      image: require("../../assets/images/deals.png"),
      text: "Deals",
    },
    {
      image: require("../../assets/images/coffee.png"),
      text: "Coffee & Tea",
    },
    {
      image: require("../../assets/images/desserts.png"),
      text: "Desserts",
    },
  ];
  
const Categories = () => {
  return (
      <View style={{
          marginTop: 5,
          backgroundColor: '#fff',
          paddingVertical: 10,
          paddingLeft: 20,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {/* loop start here */}
      {items.map((item, index) => (
      <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
        <Image source={item.image} 
            style={styles.image}
        />
        <Text style={styles.text}>
        {item.text}
        </Text>
      </View>
      ))}
      {/* loop end here */}
      </ScrollView>
      </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 40,
        resizeMode: 'contain',
    },
    text: {
       fontWeight: '900',
       fontSize: 13,
    }
})