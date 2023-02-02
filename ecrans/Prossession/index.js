import { View, Text } from "react-native";
import React from "react";
import ProssessionItem from "../../composantes/ProssessionItem";
const Prossession = () => {
  return (
    <View style={{ 
      backgroundColor: "#d6ccc2",
      height:'100%'
      }}>
      <ProssessionItem />
    </View>
  );
};

export default Prossession;
