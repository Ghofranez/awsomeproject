import React from "react";
import { Button, View, Image, StyleSheet } from "react-native";

const GoBackButton = () => {
  return (
    <View style={styles.container}>
      <Button title="Go Back" onPress={() => console.log("Button pressed")} />
      <Image
        style={styles.logo}
        source={require('../../../assets/OIP.png')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100, // Ajustez la largeur et la hauteur selon vos besoins
    height: 100,
    position: "relative",
    backgroundColor: "white",
  },
});

export default GoBackButton;