import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { DonneeOffertoire } from "../../data/donneeOffertoire";
import styles from "./style";

const OffertoireItem = () => {
  return (
    <View >
        
    <ScrollView style={styles.title_space_between}
    >
      <View style={styles.title_space_between}>
        <Text style={styles.titleBold}>Recueils d'Offertoire</Text>
      </View>
      <View style={styles.offertoireContainer}>
        {DonneeOffertoire.map((donnee) => {
          return (
            <TouchableOpacity key={donnee.id} style={styles.offertoireCard}>
              <View style={styles.offertoireInfo}>
                <Text style={styles.offertoireTitle}>{donnee.id}. {donnee.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
    </View>
  );
};

export default OffertoireItem;
