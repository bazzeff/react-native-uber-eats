import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image2-min-1024x569.png",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
];

const RestaurantItems = (props) => {
  return (
      <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {props.restaurantData.map((restaurant, index) => (
      <View key={index} style={styles.container}>
      {/* restaurant Image */}
       <RestaurantImage image={restaurant.image_url} />
      {/* restaurant item */}
       <RestaurantInfo 
          name={restaurant.name} 
          rating={restaurant.rating}/>
      </View>
      ))}
      </TouchableOpacity>
  );
}

export default RestaurantItems
const RestaurantImage = (props) => (
    <>
    <Image 
    source={{
        uri: props.image,
    }}
    style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: 'absolute', right: 20, top:20 }}>
        <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
    </TouchableOpacity>
    </>
);

const RestaurantInfo =(props) => (
    <View style={styles.info}>
    <View>
    <Text style={styles.infotext}>
       {props.name}
    </Text>
    <Text style={styles.infotext2}>30-45 min</Text>
    </View>
    <View style={styles.inforating}>
    <Text>{props.rating}</Text>
    </View>
    </View>
    
)
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 15,
        backgroundColor: '#fff',
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    infotext: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    infotext2: {
        fontSize: 13,
        color: 'gray',
    },
    inforating: {
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        alignItems: 'center',
        borderRadius: 15,
    }
})