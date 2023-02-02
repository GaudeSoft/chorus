import { View, Text } from "react-native";
import React from "react";
import CommunionItem from "../../composantes/CommunionItem";
const Communion = () => {
  return (
    <View style={{ 
      backgroundColor: "#d6ccc2",
      height:'100%'
      }}>
      <CommunionItem />
    </View>
  );
};

export default Communion;
