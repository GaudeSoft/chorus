import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { DonneeProssession } from "../../data/donneeProssession";
import styles from "./style";

const ProssessionItem = () => {
  return (
    <View >
        
    <ScrollView style={styles.title_space_between}
    >
      <View style={styles.title_space_between}>
        <Text style={styles.titleBold}>Recueils de Prossession</Text>
      </View>
      <View style={styles.prossessionContainer}>
        {DonneeProssession.map((donnee) => {
          return (
            <TouchableOpacity key={donnee.id} style={styles.prossessionCard}>
              <View style={styles.prossessionInfo}>
                <Text style={styles.prossessionTitle}>{donnee.id}. {donnee.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
    </View>
  );
};

export default ProssessionItem;
