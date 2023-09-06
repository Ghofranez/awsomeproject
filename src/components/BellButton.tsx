import React from "react";
import { View, Image, StyleSheet, Alert, TouchableOpacity } from "react-native";

const BellButton = () => {
  const handleButtonPress = () => {
    console.log('Image cliquée !');
    Alert.alert('Simple button');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleButtonPress}>
        <Image
          source={require('../../assets/bell.png')}
          style={styles.belll}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  belll: {
    marginRight: 20, // Vous pouvez personnaliser la marge selon vos besoins
  },
});

export default BellButton;
