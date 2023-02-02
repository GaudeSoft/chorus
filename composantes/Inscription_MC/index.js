import React, { useState } from 'react';
import { View, Text, TextInput, Button,TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const InscriptionForm = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [diocese, setDiocese] = useState('');
  const [paroise, setParoisse] = useState('');
  const [chorale, setChorale] = useState('');
  const [instrument, setInstrument] = useState('');
  const [telephone, setTelephone] = useState('');
  const handleSubmit = () => {
    // validation de formulaire et soumission des données ici
  };
const navigation = useNavigation();
  return (
    <ScrollView style={styles.container_pricipal}
        showsVerticalScrollIndicator={false}
        >
      <Text style={styles.title}>Maître de choeur - Inscription</Text>
      <TextInput
       style={styles.input_form}
        value={nom}
        onChangeText={(text) => setNom(text)}
        placeholder="Entrer votre nom"
      
      />

      
      <TextInput
       style={styles.input_form}
        value={prenom}
        onChangeText={(text) => setPrenom(text)}
        placeholder="Entrer votre prenom"
      />

      <TextInput
       style={styles.input_form}
        value={diocese}
        onChangeText={(text) => setDiocese(text)}
        placeholder="Entrer votre diocèse/archidiocèse"
      />
      
      
      <TextInput
       style={styles.input_form}
        value={paroise}
        onChangeText={(text) => setParoisse(text)}
        placeholder="Entrer votre paroisse"
      />

      
      <TextInput
       style={styles.input_form}
        value={chorale}
        onChangeText={(text) => setChorale(text)}
        placeholder="Entrer votre chorale"
      />

      
      <TextInput
       style={styles.input_form}
        value={telephone}
        onChangeText={(tel) => setTelephone(tel)}
        placeholder="Entrer votre telephone"
        keyboardType="numeric"
      />
      
      {/* <TextInput
       style={styles.input_form}
        value={instrument}
        onChangeText={(text) => setInstrument(text)}
        placeholder="Entrer votre instrument"
      /> */}
      
     <View style={styles.container_submit}>
        <Text style={styles.text_submit}>Créer</Text>
        <TouchableOpacity 
          style={styles.icon_submit}
          onPress={() => navigation.navigate('DrawerNavigator')}
          >
            <AntDesign name="arrowright" size={20} color='black'/>
        </TouchableOpacity>

     </View>
        
        {/* <Button 
            
            title="Soumettre" 
            onPress={handleSubmit} 
        /> */}
    </ScrollView>
  );
};

export default InscriptionForm;
