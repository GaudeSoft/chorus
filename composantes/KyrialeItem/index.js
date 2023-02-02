import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { DonneeKyriale } from "../../data/donneeKyriale";
import styles from "./style";

const KyrialeItem = () => {
  return (
    <View>
        
    <ScrollView style={styles.title_space_between}
    >
      <View style={styles.title_space_between}>
        <Text style={styles.titleBold}>Recueils de kyriale</Text>
      </View>
      <View style={styles.kyrieContainer}>
        {DonneeKyriale.map((donnee) => {
          return (
            <TouchableOpacity key={donnee.id} style={styles.kyrieCard}>
              <View style={styles.kyrieInfo}>
                <Text style={styles.kyrieTitle}>{donnee.id}. {donnee.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
    </View>
  );
};

export default KyrialeItem;
