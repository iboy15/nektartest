import React from "react";
import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

export const ErrorComponent = props => {
  return (
    <View style={styles.container}>
      <Text>Opss, Something went wrong, when try to get {props.name}</Text>
      <TouchableOpacity
        style={styles.tryAgainBtn}
        onPress={() => props.tryAgain()}
      >
        <Text style={styles.tryAgainText}>Try Again</Text>
      </TouchableOpacity>

      <Text>{props.title}</Text>
    </View>
  );
};
