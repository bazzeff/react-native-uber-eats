import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'

const HeaderTabs = (props) => {
    const [activeTab, setActiveTab] = useState("Delivery")
  return (
    <View style={styles.header}>
      <HeaderButton 
      btnColor="black" 
      textColor="white" 
      text="Delivery" 
      activeTab={props.activeTab} 
      setActiveTab={props.setActiveTab}/>
      
      <HeaderButton 
      btnColor="white" 
      textColor="black" 
      text="Pickup" 
      activeTab={props.activeTab} 
      setActiveTab={props.setActiveTab}/>
    </View>
  )
}

export default HeaderTabs

const HeaderButton = (props) => (
    <View style={styles.headerButton}>
    <TouchableOpacity style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        
    }}
    onPress={() => props.setActiveTab(props.text)}
    >
    <Text style={{
        color: props.activeTab === props.text ? "white" : "black",
        fontSize: 15,
        fontWeight: "900",
    }}>{props.text}</Text>
    </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row', 
        alignSelf: 'center', 

    },
    headerButton: { 
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 30,

    },
    text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: "900",
    },
    textHeader1: {
        backgroundColor: '#000',  
    },
    textHeader2: {
        backgroundColor: '#fff', 
    }
})