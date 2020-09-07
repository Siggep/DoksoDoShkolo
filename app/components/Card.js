import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function Card({ title, subTitle, propSize, room, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <View style={styles.information}>
            <Text style={styles.subTitle} numberOfLines={2}>
              {subTitle}
            </Text>
            <Text style={styles.propSize} numberOfLines={2}>
              {propSize}
            </Text>
            <Text style={styles.room} numberOfLines={2}>
              {room}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  information: {
    flexDirection: "row",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    paddingRight: 10,
  },
  propSize: {
    color: colors.secondary,
    fontWeight: "bold",
    paddingRight: 10,
  },
  room: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
