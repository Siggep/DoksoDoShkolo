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
import GoBackButton from "../components/GoBackButton";
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
      <GoBackButton navigation={navigation} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>{listing.price} kr</Text>
        <Text style={styles.propSize}>{listing.propertySize} Kvm</Text>
        <Text style={styles.room}>{listing.room} Rum</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Sargon Poli"
            subTitle="Sargonpoli@fastighetsbyrån.se"
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
  // listingButtonClose: {
  //   position: "absolute",
  //   top: 40,
  //   left: 10,
  //   flexDirection: "row",
  // },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  propSize: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  room: {
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
