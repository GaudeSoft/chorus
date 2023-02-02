import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { DonneeCommunion } from "../../data/donneeCommunion";
import styles from "./style";

const CommunionItem = () => {
  return (
    <View >
        
    <ScrollView style={styles.title_space_between}
    >
      <View style={styles.title_space_between}>
        <Text style={styles.titleBold}>Recueils de Communion</Text>
      </View>
      <View style={styles.communionContainer}>
        {DonneeCommunion.map((donnee) => {
          return (
            <TouchableOpacity key={donnee.id} style={styles.communionCard}>
              <View style={styles.communionInfo}>
                <Text style={styles.communionTitle}>{donnee.id}. {donnee.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
    </View>
  );
};

export default CommunionItem;
