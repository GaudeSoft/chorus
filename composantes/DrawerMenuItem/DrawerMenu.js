import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Donnee } from "../../data/donneeAcceuil";
import styles from "./style";

const DrawerMenu = ({navigation}) => {
  return (
    <ScrollView >
      <View style={styles.title_space_between}>
        <Text style={styles.titleBold}>Recueils de chants</Text>
      </View>
      <View style={styles.doctorsContainer}>
        {Donnee.map((donnee) => {
          return (
            <TouchableOpacity 
              key={donnee.id} 
              style={styles.doctorsCard} 
              onPress={()=>navigation.navigate('Offrande')}
            >
              <Image
                source={{ uri: `${donnee.img}` }}
                style={styles.doctorImg}
              />
              <View style={styles.doctorInfo}>
                <Text style={styles.doctorName}>{donnee.title}</Text>
                <Text style={styles.doctorSpec}>{donnee.details}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default DrawerMenu;
