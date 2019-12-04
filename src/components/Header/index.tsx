import React from "react";
import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

export const Header = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => props.navigation.goBack()}
      >
        <Image
          source={require("../../../assets/back.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <Image source={{ uri: props.avatar }} style={styles.avatar} />
      <Text>{props.title}</Text>

      <Image source={require("../../../assets/bee.png")} style={styles.bee} />
    </View>
  );
};
