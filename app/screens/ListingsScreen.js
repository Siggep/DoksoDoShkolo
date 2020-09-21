import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ReactDOM from "react-dom";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import Filter from "../components/Filter";
import FirebaseConfig from "../firebase/config";

import * as firebase from "firebase";

const db = firebase.firestore();

var allListings = [];

db.collection("Listings")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      allListings.push(doc.data());
      console.log(allListings);
    });
  });

// const listings = [
//   {
//     id: 1,
//     title: "Vacker & charmig bostad",
//     price: 2500000,
//     propertySize: 105,
//     room: 4,
//     image: require("../assets/house01.jpg"),
//   },
//   {
//     id: 2,
//     title: "Lägenhet med utsikt",
//     price: 1500000,
//     propertySize: 105,
//     room: 2,
//     image: require("../assets/house02.jpg"),
//   },
//   {
//     id: 4,
//     title: "Lägenhet med utsikt",
//     price: 1500000,
//     propertySize: 105,
//     room: 2,
//     image: require("../assets/house02.jpg"),
//   },
// ];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <Filter />
      <FlatList
        data={allListings}
        keyExtractor={(listing) => listing.Id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.Title}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
