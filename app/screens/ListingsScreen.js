import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Vacker & charmig bostad",
    price: 2500000,
    propertySize: 105,
    room: 4,
    image: require("../assets/house01.jpg"),
  },
  {
    id: 2,
    title: "Lägenhet med utsikt",
    price: 1500000,
    propertySize: 105,
    room: 2,
    image: require("../assets/house02.jpg"),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price + " kr"}
            propSize={item.propertySize + " kvm"}
            room={item.room + " Rum"}
            image={item.image}
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
