import React from "react";
import { StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import { ListItem, ListItemSeparator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";

function MyAccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem title="Porträtt" image={require("../assets/mosh.jpg")} />
        <ListItemSeparator />
        <ListItem
          title="Mäklarbyrå"
          IconComponent={<Icon name="home" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default MyAccountScreen;
