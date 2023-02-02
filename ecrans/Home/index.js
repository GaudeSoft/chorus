import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import styles from "./style";
import { FakeExercice } from "../../data/fakeExercice";
import ExercieItem from "../../composantes/ExerciceItem";
const Accueil = () => {
  return (
    <ScrollView >
      {/* Debut du header */}
      <View style={styles.header}>
        {/* <Text >Chorus</Text> */}
        <Text style={styles.userName}>Chorus</Text>
        <Text>lorem</Text>
      </View>
      {/* Fin du header */}
      
      
      {/* Debut des listes des exercices */}
      <FlatList
        data={FakeExercice}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>{
          return(
            <ExercieItem item={item}/>
          );
        }}
      />

      {/* Fin des listes des exercices */}

    </ScrollView>
  );
};

export default Accueil;
