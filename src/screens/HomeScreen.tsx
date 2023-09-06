import React from "react";
import { View, Image, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import RegisterButton from "../components/RegisterButton";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToSecondScreen = () => {
    navigation.navigate('SecondScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../assets/home.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <Text style={styles.titleText}>
          Discover and Find Your {"\n"}
          Perfect Healing Place
        </Text>
        <Text style={styles.descriptionText}>
          Eheal is the No. 1 app to search and discover the {"\n"}
          most suitable place for your stay.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleNavigateToSecondScreen}>
          <RegisterButton />
        </TouchableOpacity>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Log In</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  backgroundImage: {
    width: "100%",
    height: "50%",
    resizeMode: "cover",
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  descriptionText: {
    color: "grey",
    fontSize: 12, // Augmentez la taille de police pour une meilleure lisibilité
    textAlign: "center",
    marginTop: 15,
  },
  buttonContainer: {
    marginBottom: 15,
  },
  loginContainer: {
    alignItems: "center",
    marginTop: 10, // Évitez d'utiliser un décalage négatif (top: -10)
  },
  loginText: {
    fontSize: 12, // Augmentez la taille de police pour une meilleure lisibilité
    color: "grey",
  },
  loginLink: {
    color: 'brown',
  },
});

export default HomeScreen;
