import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

function Header() {
  return (
    <View>
      <Entypo name="notification" size={30} color="#efefef" />
      
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {

  }
})
