import React from "react";
import { View, StyleSheet, Image, ScrollView, Text } from "react-native";

const Galerie = () => {
  return (
    <ScrollView style={styles.container} horizontal={true}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/page2.png")}
          style={styles.image1}
        />
        <Text style={styles.text}>
          Bitung Resort {"\n"}
          <Text style={styles.priceText}>$5000</Text>
          <Text style={styles.nightText}>/night</Text>
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/2page.png")}
          style={styles.image2}
        />
        <Text style={styles.imageText}>
        Lembeh Resort {"\n"}
          <Text style={styles.priceText}>$1000</Text>
          <Text style={styles.nightText}>/night</Text>
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/p2.png")}
          style={styles.image3}
        />
        <Text style={styles.imageText}>
        shing Resort {"\n"}
          <Text style={styles.priceText}>$2000</Text>
          <Text style={styles.nightText}>/night</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    marginRight: 20, // Espacement entre les images et le texte
  },
  image1: {
    width: 200,
    height: 200,
  },
  image2: {
    width: 200,
    height: 200,
  },
  image3: {
    width: 200,
    height: 200,
  },
  imageText: {
    textAlign: "center",
    marginTop: 5, // Espacement entre l'image et le texte
  },
  priceText: {
    color: 'brown', // Couleur bleue pour "$5000"
    fontWeight: 'bold', // Texte en gras pour "$5000" (si nécessaire)
  },
  nightText: {
    color: 'grey' ,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Galerie;
