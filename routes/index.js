import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./style";
import Acceuil from "../ecrans/Acceuil";
import InscriptionMaitre from "../ecrans/InscriptionMaitre";
import InscriptionChoriste from "../ecrans/InscriptionChoriste";
import Drawer from "../ecrans/Drawer";
import Kyriale from "../ecrans/Kyriale";
import Communion from "../ecrans/Communion";
import Offertoire from "../ecrans/Offertoire";
import Offrande from "../ecrans/Offrande";
import Prossession from "../ecrans/Prossession";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const AVATAR = {source:{require:('../assets/images/woman.jpg')}}
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >

        <Stack.Screen name="home" component={Acceuil} />

        <Stack.Screen name="inscription" component={InscriptionMaitre} />

        <Stack.Screen name="inscriptions" component={InscriptionChoriste} />

        {/* <Stack.Screen name="drawer" component={Drawer}/> */}
        <Stack.Screen name="Kyriale" component={Kyriale}/>

        <Stack.Screen name="Communion" component={Communion}/>

        <Stack.Screen name="Offertoire" component={Offertoire}/>

        <Stack.Screen name="Offrande" component={Offrande}/>

        <Stack.Screen name="Prossession" component={Prossession}/>
        
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const DrawerNav = createDrawerNavigator();
const EcranPartiton = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>EcranPartiton</Text>
    </View>
  );
};
const EcranParole = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>EcranParole</Text>
    </View>
  );
};
const EcranParametre = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>EcranParametre</Text>
    </View>
  );
};

const DrawerNavigator = () =>{
  return(
      <DrawerNav.Navigator>
          <DrawerNav.Screen initialRouteName="Acceuil" name="Acceuil" component={Drawer}/>
          <DrawerNav.Screen name="Partitions" component={EcranPartiton}/>
          <DrawerNav.Screen name="Parole" component={EcranParole}/>
          <DrawerNav.Screen name="Paramètres" component={EcranParametre}/>
      </DrawerNav.Navigator>
  )
}


export default Routes;
