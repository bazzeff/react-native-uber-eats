import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Divider } from 'react-native-elements'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItem, { localRestaurants, } from '../components/home/RestaurantItems' 
import BottomTabs from '../components/home/BottomTabs'

const YELP_API_KEY = 
"";

const Home = () => {

  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");
    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    
        const apiOptions = {
          headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
          },
        };
    
        return fetch(yelpUrl, apiOptions)
          .then((res) => res.json())
          .then((json) =>
            setRestaurantData(
              json.businesses.filter((business) =>
                business.transactions.includes(activeTab.toLowerCase())
              )
            )
          ); 
      };
    
      useEffect(() => {
        getRestaurantsFromYelp();
      }, [city, activeTab]);

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.view}>
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchBar  
      cityHandler={setCity} />
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Categories />
      <RestaurantItem 
      restaurantData={restaurantData}/>
    </ScrollView>
    <Divider width={1} />
    <BottomTabs />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        flex: 1,
    },
    view: {
        backgroundColor: '#fff',
        padding: 15,
    }
})