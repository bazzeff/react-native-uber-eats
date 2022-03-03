import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = ({cityHandler}) => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete 
        query={{key: "AIzaSyC6f1kkzcBRSvlUFrEGXNBbl7dQ8zFhJnY"}}
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(",")[0];
          cityHandler(city);
        }}
        placeholder="Search" 
        styles={{
          textInput:{
            backgroundColor: "#eee",
            borderRadius: 20,
            frontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50, 
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
            
          },
        }}
        renderLeftButton = { () => 
          <View style={styles.SearchBar}>
           <Icon name='location-sharp' size={ 24 }  />
          </View>
        }
        renderRightButton = { () =>
        <View style={styles.SearchBarLeftIcon}>
        <AntDesign name='clockcircle' size={ 11 } style={{ marginRight: 6 }} />
          <Text>Search</Text>
        </View>
        }
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
  },
  SearchBar: {
    marginLeft: 10,
  },
  SearchBarLeftIcon: {
    flexDirection: 'row',
    marginRight: 8,
    backgroundColor: '#fff',
    padding: 9,
    borderRadius: 30,
    alignItems: 'center',

  }
})