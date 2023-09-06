import React from "react";
import { ScrollView, View,Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import BellButton from "../components/BellButton";
import SearchBar from "../components/SearchBar";
import Galerie from "../components/Galerie";

const SecondScreen = () => {
  const handleViewAllClick = () => {
    // Logique pour gérer le clic sur "View All"
    console.log("Bouton 'View All' cliqué");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <BellButton />
        <Text style={styles.text}>Current Location</Text>
      </View>
      
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>House Near You</Text>
        <TouchableOpacity
          style={styles.viewAllButton}
          onPress={handleViewAllClick}
        >
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.galerieContainer}>
        <Galerie />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Listings</Text>
        <TouchableOpacity
          style={styles.viewAllButton}
          onPress={handleViewAllClick}
        >
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
        style={styles.image}
        source={require('../../assets/pag2.png')}/>
        <Text style={styles.imageText}>
        Japenese-style Hotel {"\n"}</Text>
          <Text style={styles.priceText}>$10.000</Text>
          <Text style={styles.nightText}>/night</Text>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/iconhome.png')}
          />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/myorders.png')}
          />
          <Text>My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/save.png')}
          />
          <Text>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/chathost.png')}
          />
          <Text>Chat Host</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/profile.png')}
          />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 10,
    color: "grey",
    marginLeft: 20,
  },
  searchBarContainer: {
    marginTop: 20,
  },
  section: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  viewAllText: {
    color: "orange",
    fontSize: 16,
  },
  galerieContainer: {
    marginTop: 20,
  },
  image: {
width: 100,
height:100,
borderRadius: 5,
marginTop: 10,
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  footerButton: {
    alignItems: 'center',
  },
  buttonIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
});

export default SecondScreen;
