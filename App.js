import React from 'react';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { View, Text } from 'react-native';
import Routes from './routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    "AbrilFatface-Regular": require('./assets/fonts/AbrilFatface-Regular.ttf'),
    "AkayaKanadaka-Regular": require('./assets/fonts/AkayaKanadaka-Regular.ttf'),
    "BerkshireSwash-Regular": require('./assets/fonts/BerkshireSwash-Regular.ttf'),
    "Caveat-Bold": require('./assets/fonts/Caveat-Bold.ttf'),
    "Caveat-Medium": require('./assets/fonts/Caveat-Medium.ttf'),
    "Caveat-Regular": require('./assets/fonts/Caveat-Regular.ttf'),
    "Caveat-SemiBold": require('./assets/fonts/Caveat-SemiBold.ttf'),
    "FugazOne-Regular": require('./assets/fonts/FugazOne-Regular.ttf'),
    "MsMadi-Regular": require('./assets/fonts/MsMadi-Regular.ttf'),
    "Pacifico-Regular": require('./assets/fonts/Pacifico-Regular.ttf'),
    "PassionsConflict-Regular": require('./assets/fonts/PassionsConflict-Regular.ttf'),
    "Satisfy-Regular": require('./assets/fonts/Satisfy-Regular.ttf'),
    "Shrikhand-Regular": require('./assets/fonts/Shrikhand-Regular.ttf'),
    "Tangerine-Bold": require('./assets/fonts/Tangerine-Bold.ttf'),
    "Tangerine-Regular": require('./assets/fonts/Tangerine-Regular.ttf'),
    "Lobster-Regular": require('./assets/fonts/Lobster-Regular.ttf'),
    "Caveat-VariableFont_wght": require('./assets/fonts/Caveat-VariableFont_wght.ttf'),
    "PermanentMarker-Regular": require('./assets/fonts/PermanentMarker-Regular.ttf'),
  });

  useEffect(() => {
    function loadFonts() {
      fontsLoaded;
    }
    loadFonts();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <View><Text>loading...</Text></View>
      ;
  }


  return (
    <View  style={{flex: 1}}>
      <Routes />
    </View>
  );
}