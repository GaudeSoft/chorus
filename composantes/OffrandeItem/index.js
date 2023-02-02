import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { DonneeOffrande } from "../../data/donneeOffrande";
import styles from "./style";

const OffrandeItem = () => {
  return (
    <View >
        
    <ScrollView style={styles.title_space_between}
    >
      <View style={styles.title_space_between}>
        <Text style={styles.titleBold}>Recueils d'Offrande</Text>
      </View>
      <View style={styles.offrandeContainer}>
        {DonneeOffrande.map((donnee) => {
          return (
            <TouchableOpacity key={donnee.id} style={styles.offrandeCard}>
              <View style={styles.offrandeInfo}>
                <Text style={styles.offrandeTitle}>{donnee.id}. {donnee.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
    </View>
  );
};

export default OffrandeItem;
