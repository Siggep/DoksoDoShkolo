import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";
import routes from "../navigation/routes";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ViewImageScreen from "../screens/ViewImageScreen";

function ListingDetailsScreen({ route, navigation, onPress }) {
  const listing = route.params;

  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate(routes.VIEW_IMAGE, route.params)}
      >
        <View>
          <Image style={styles.image} source={listing.image}></Image>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.listingButtonClose}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={40}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Button
          color="black"
          title="Tillbaka"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  listingButtonClose: {
    position: "absolute",
    top: 40,
    left: 10,
    flexDirection: "row",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
