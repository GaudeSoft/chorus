import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './style';


const ButtonAcceuil = ({navigation}) => {
  return (
    <View style={styles.container_pricipal}>
      <Text style={styles.main_title}>Bienvenue sur Chorus</Text>

      <Text style={styles.secondary_title}>Choisir ta catégorie</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('inscription')}
      >

        <Text style={styles.text}>Maitre de choeur</Text>
        
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('inscriptions')}
      >
        <Text style={styles.text}>Choriste</Text>
      </TouchableOpacity>
    </View>
  );
};



export default ButtonAcceuil;
