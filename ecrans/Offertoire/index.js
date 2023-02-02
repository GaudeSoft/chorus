import { View, Text } from "react-native";
import React from "react";
import OffertoireItem from "../../composantes/OffertoireItem";
const Offertoire = () => {
  return (
    <View style={{ 
      backgroundColor: "#d6ccc2",
      height:'100%'
      }}>
      <OffertoireItem />
    </View>
  );
};

export default Offertoire;
